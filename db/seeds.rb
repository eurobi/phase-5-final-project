# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ambassadors = Ambassador.create([
#     { email: "dummy@gmail.com", password_digest: "password" }, 
#     { email: "king@gmail.com", password_digest: "heythere" }, 
#     { email: "queen@gmail.com", password_digest: "securitylol" }, 
#     { email: "jdog@gmail.com", password_digest: "ayyylmao" }, 
#     { email: "moneymaker@gmail.com", password_digest: "hahaha" }, 
#     { email: "codeking@gmail.com", password_digest: "yasqueen" }, 
#     { email: "supercool@gmail.com", password_digest: "supwitit" }, 
#     { email: "heythere@gmail.com", password_digest: "king" }])

# ambassadors = Ambassador.create([
#     { email: "test2@gmail.com", password_digest: "thiswontworkright" }])

# applications = App.create([
#     { ambassador_id: 1, last_name: "johnson", first_name: "billy", ambassador_type: "groomer", mailing_address: "121 billy lane", website: "billybob.com", tiktok_handle: nil, youtube_link: nil, instagram_handle: nil, twitter_handle: nil, other_info: nil, accepted: true},
#     { ambassador_id: 2, last_name: "king", first_name: "bobby", ambassador_type: "digital creator", mailing_address: "121 billy lane", website: nil, tiktok_handle: "@bobbyking", youtube_link: "https://www.youtube.com/@Daxflame", instagram_handle: "@bobbyking", twitter_handle: nil, other_info: nil, accepted: true},
#     { ambassador_id: 3, last_name: "smith", first_name: "jimmy", ambassador_type: "veterinarian", mailing_address: "121 billy lane", website: "billybob.com", tiktok_handle: nil, youtube_link: nil, instagram_handle: nil, twitter_handle: nil, other_info: nil, accepted: false},
#     { ambassador_id: 4, last_name: "james", first_name: "lebron", ambassador_type: "other", mailing_address: "121 billy lane", website: "billybob.com", tiktok_handle: "@Lebron", youtube_link: nil, instagram_handle: "@lebron", twitter_handle: nil, other_info: "athlete", accepted: false},
#     { ambassador_id: 5, last_name: "moon", first_name: "nate", ambassador_type: "digital creator", mailing_address: "121 billy lane", website: "billybob.com", tiktok_handle: nil, youtube_link: "https://www.youtube.com/@Daxflame", instagram_handle: "@natemoon", twitter_handle: nil, other_info: nil, accepted: nil},
#     { ambassador_id: 6, last_name: "norbert", first_name: "sally", ambassador_type: "groomer", mailing_address: "121 billy lane", website: "sally.com", tiktok_handle: nil, youtube_link: nil, instagram_handle: nil, twitter_handle: nil, other_info: nil, accepted: nil}
    
# ])

payment_reports = PaymentReport.create([
    { month: '2023-05', sent: false },
    { month: '2023-06', sent: false }
])

sales = Sale.create([
    {date: '2023-05-01', amount: 100, ambassador_id: 1, payment_report_id: 7},
    {date: '2023-05-03', amount: 85, ambassador_id: 1, payment_report_id: 7},
    {date: '2023-05-07', amount: 200, ambassador_id: 2, payment_report_id: 7},
    {date: '2023-05-07', amount: 115, ambassador_id: 2, payment_report_id: 7},
    {date: '2023-05-15', amount: 75, ambassador_id: 2, payment_report_id: 7},
    {date: '2023-05-20', amount: 80, ambassador_id: 1, payment_report_id: 7},
    {date: '2023-06-5', amount: 100, ambassador_id: 1, payment_report_id: 8},
    {date: '2023-06-07', amount: 120, ambassador_id: 1, payment_report_id: 8},
    {date: '2023-06-09', amount: 70, ambassador_id: 1, payment_report_id: 8},
    {date: '2023-06-10', amount: 125, ambassador_id: 2, payment_report_id: 8}
])






