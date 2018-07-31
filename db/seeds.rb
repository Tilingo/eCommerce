Product.destroy_all
Order.destroy_all
LineItem.destroy_all

products = Product.create([
    {
        name: 'Diana Instant Square',
        description: 'Shake off expectations and let the Diana Instant Square fill your frame with unpredictable beauty. There’s no re-take, no post-production polishing — you snap the shot and seconds later you hold a beautiful picture filled with strong, saturated colors and soft, moody vignetting in your hands. The Diana Instant Square electrifies your life with lo-fi love, opening up a whole world of creativity and freedom.',
        price: 99,
        photo_url: 'https://microsites.lomography.com/diana/images/instant-sq.png?1529500677'
    },
    {
        name: 'The Keyboard Waffle Iron',
        description: 'Using The Keyboard Waffle Iron is incredibly easy and makes a delicious waffle in just 5 minutes: 1. Prep: pre-heat The Keyboard Waffle Iron on any stove, grill, or other cooking surface. Coat lightly with a non-stick cooking spray. 2. Pour: add in your favorite batter recipe (or use a boxed pancake mix). Close the lid and allow the batter to cook for 2-3 minutes. 3. Flip: flip The Keyboard Waffle Iron over to cook the other side for an additional 1-2 minutes. 4. EAT!',
        price: 69,
        photo_url: 'https://www.thinkgeek.com/images/products/zoom/jmmi_the_keyboard_waffle_iron.jpg'
    },
    {
        name: 'The Hipster Bicycle',
        description: 'Our Hipster Bicycle 7-speed cycle has something for every type of urban rider. Combat Bay Area inclines, flat Chicagoland bureaus, and tight New York one-ways with this top-notch hybrid. The step-thru style makes it easy to mount and perfect for any age, stature, or style (dress & skirt friendly!). Combined with front and rear alloy brakes, the Shimano 7-speed drivetrain and RevoShift grip shifters ensure utmost control and precision.',
        price: 299,
        photo_url: 'http://sumabeachlifestyle.com/wp-content/uploads/2014/03/lekker-jordaan-green-1-700x524.jpg'
    }
])

orders = Order.create([
    {
        active: false
    },
    {
        active: false
    },
    {
        active: true
    }
])

LineItem.create(
    product_id: products[0].id, 
    order_id: orders[0].id, 
    :qty => 1,
    :name => products[0].name,
    :price => products[0].price,
    :photo_url => products[0].photo_url
)

LineItem.create(
    product_id: products[1].id, 
    order_id: orders[0].id, 
    :qty => 1,
    :name => products[1].name,
    :price => products[1].price,
    :photo_url => products[1].photo_url
)

LineItem.create(
    product_id: products[2].id, 
    order_id: orders[0].id, 
    :qty => 2,
    :name => products[2].name,
    :price => products[2].price,
    :photo_url => products[2].photo_url
)

LineItem.create(
    product_id: products[2].id, 
    order_id: orders[1].id, 
    :qty => 5,
    :name => products[2].name,
    :price => products[2].price,
    :photo_url => products[2].photo_url
)

LineItem.create(
    product_id: products[0].id, 
    order_id: orders[2].id, 
    :qty => 2,
    :name => products[0].name,
    :price => products[0].price,
    :photo_url => products[0].photo_url
)

LineItem.create(
    product_id: products[1].id, 
    order_id: orders[2].id, 
    :qty => 3,
    :name => products[1].name,
    :price => products[1].price,
    :photo_url => products[1].photo_url
)

LineItem.create(
    product_id: products[2].id, 
    order_id: orders[2].id, 
    :qty => 1,
    :name => products[2].name,
    :price => products[2].price,
    :photo_url => products[2].photo_url
)

puts 'Seeding completed'

