class AmbassadorSerializer < ActiveModel::Serializer
  attributes :id, :email, :sales_count, :commission_rate, :sales_total, :commission_earned, :last_14_days, :last_14_max, :payments, :app

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
      day = yesterday - 13 + count
      found = sales.find {|sale| sale[:date] == day.to_s}
      if found
        l_14 << found
      else
        l_14 << {"date":day, "total_amount":0, "id":nil}
      end
    end
    l_14
  end

  def last_14_max
    yesterday = Date.yesterday
    sales = Sale.select('date, SUM(amount) AS total_amount').where(ambassador_id: object.id.to_s).group(:date)
    max = 0
    14.times do |count|
      day = yesterday - 13 + count
      found = sales.find {|sale| sale[:date] == day.to_s}
      if found 
        if found.total_amount > max
          max = found.total_amount
        end
      end
    end
    max
  end

  def payments
    reports = object.payment_reports.uniq
    payments = reports.map do |report|
      sales = Sale.where("ambassador_id = ? AND date LIKE ?", object.id.to_s, "%#{report.month}%")
      commission = sales.sum {|sale| sale[:amount]} * object.commission_rate
      {"month"=> report.month, "commission_earned"=> commission, "paid"=> report.sent}
    end
    payments
  end

  
end
