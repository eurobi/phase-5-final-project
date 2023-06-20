class AmbassadorSerializer < ActiveModel::Serializer
  attributes :id, :sales_count, :sales_total, :commission_earned, :last_14_days, :payments, :app

  def sales_count
    object.sales.count
  end

  def sales_total
    object.sales.sum {|sale| sale[:amount]}
  end

  def commission_earned
    if sales_total && object.commission_rate
      sales_total * object.commission_rate
    else
      0
    end
  end

  def last_14_days
    yesterday = Date.yesterday
    sales = Sale.select('date, SUM(amount) AS total_amount').where(ambassador_id: object.id.to_s).group(:date)
    l_14 = []
    14.times do |count|
      day = yesterday - count
      found = sales.find {|sale| sale[:date] == day.to_s}
      if found
        l_14 << found
      else
        l_14 << {"date":day, "total_amount":0, "id":nil}
      end
    end
    l_14
  end

  def payments
    reports = object.payment_reports.uniq
    payments = reports.map do |report|
      sales = Sale.where("ambassador_id = ? AND date LIKE ?", object.id.to_s, "%#{report.month}%")
      commission = sales.sum {|sale| sale[:amount]} * object.commission_rate
      {"month"=> report.month, "commission earned"=> commission, "paid?"=> report.sent}
    end
    payments
  end

  
end
