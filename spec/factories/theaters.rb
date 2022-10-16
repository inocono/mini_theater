FactoryBot.define do
  factory :theater do
    name { "MyString" }
    image { "MyString" }
    description { "MyText" }
    address { "MyString" }
    screen { "MyString" }
    seat { "MyString" }
    price { "MyText" }
    homepage { "MyText" }
    sns { "MyText" }
    latitude { 1.5 }
    longitude { 1.5 }
  end
end
