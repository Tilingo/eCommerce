Product.destroy_all
Order.destroy_all
LineItem.destroy_all

products = Product.create([
    {
        name: 'Playstation 4',
        description: 'Very cool game console',
        price: 299,
        photo_url: 'https://psmedia.playstation.com/is/image/psmedia/ps4-gold-screen-03-eu-30may17?$MediaCarousel_LargeImage$'
    },
    {
        name: 'Nintendo Switch',
        description: 'Very cool hybrid console',
        price: 299,
        photo_url: 'https://www.nintendo.com/switch/etRgxnAu0zRX4bmWnt9K628wG7YQUI6t/images/switch/buy-now/bundle_color_console.jpg'
    },
    {
        name: 'Xbox',
        description: 'Its Ok',
        price: 299,
        photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg'
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

