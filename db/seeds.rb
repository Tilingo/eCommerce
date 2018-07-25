Product.destroy_all
Order.destroy_all
LineItem.destroy_all

products = Product.create([
    {
        name: 'Playstation 4',
        description: 'Very cool game console',
        price: 299,
        photo_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-ca.ebgames.ca%2Fimages%2Fproducts%2F710007%2F3max.jpg&imgrefurl=https%3A%2F%2Fwww.ebgames.ca%2FPS4%2FGames%2F713446&docid=UQRprvSL5y0qDM&tbnid=k0rbE7godaaE1M%3A&vet=10ahUKEwiJ-uzyqbjcAhWtVt8KHYJbCFcQMwiIAigDMAM..i&w=1000&h=1273&bih=780&biw=960&q=playstation%204&ved=0ahUKEwiJ-uzyqbjcAhWtVt8KHYJbCFcQMwiIAigDMAM&iact=mrc&uact=8'
    },
    {
        name: 'Nintendo Switch',
        description: 'Very cool hybrid console',
        price: 299,
        photo_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nintendo.com%2Fswitch%2FetRgxnAu0zRX4bmWnt9K628wG7YQUI6t%2Fimages%2Fswitch%2Fbuy-now%2Fbundle_color_console.jpg&imgrefurl=https%3A%2F%2Fwww.nintendo.com%2Fswitch%2Fbuy-now%2F&docid=mirr4lT0Xy17EM&tbnid=VGu-brBM-TaifM%3A&vet=10ahUKEwiSg96cqrjcAhVldt8KHU-LDLQQMwj7AigAMAA..i&w=554&h=369&bih=780&biw=960&q=nintendo%20switch&ved=0ahUKEwiSg96cqrjcAhVldt8KHU-LDLQQMwj7AigAMAA&iact=mrc&uact=8'
    },
    {
        name: 'Xbox',
        description: 'Its Ok',
        price: 299,
        photo_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F43%2FXbox-console.jpg%2F1200px-Xbox-console.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FXbox_(console)&docid=ur7Z8zXMpNfzVM&tbnid=k5mzfBJD0M7jaM%3A&vet=10ahUKEwjo2u6MrLjcAhXPxVkKHUmICCMQMwieAigGMAY..i&w=1200&h=552&bih=780&biw=960&q=xbox&ved=0ahUKEwjo2u6MrLjcAhXPxVkKHUmICCMQMwieAigGMAY&iact=mrc&uact=8'
    }
])

orders = Order.create([
    {
        status: 'OPEN'
    },
    {
        status: 'CLOSED'
    },
    {
        status: 'OPEN'
    }
])

LineItem.create(
    product_id: products[0].id, 
    order_id: orders[0].id, 
    :qty => 1,
    :name => products[0].name,
    :price => products[0].price
)

LineItem.create(
    product_id: products[1].id, 
    order_id: orders[0].id, 
    :qty => 1,
    :name => products[1].name,
    :price => products[1].price
)

LineItem.create(
    product_id: products[2].id, 
    order_id: orders[0].id, 
    :qty => 2,
    :name => products[2].name,
    :price => products[2].price
)

LineItem.create(
    product_id: products[2].id, 
    order_id: orders[1].id, 
    :qty => 5,
    :name => products[2].name,
    :price => products[2].price
)

LineItem.create(
    product_id: products[0].id, 
    order_id: orders[2].id, 
    :qty => 2,
    :name => products[0].name,
    :price => products[0].price
)

LineItem.create(
    product_id: products[1].id, 
    order_id: orders[2].id, 
    :qty => 3,
    :name => products[1].name,
    :price => products[1].price
)

LineItem.create(
    product_id: products[2].id, 
    order_id: orders[2].id, 
    :qty => 1,
    :name => products[2].name,
    :price => products[2].price
)

puts 'Seeding completed'

