<?php


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');



$products = [
    [
        'id' => 1,
        'name' => 'Gaming PC - Titan X Series',
        'description' => 'This is a gaming PC that will run all the latest games at ultra settings with no lag. It has an Intel Core i9 processor, 32GB of RAM, and an NVIDIA GeForce RTX 4080 graphics card.',
        'category' => 'Joueur sur PC',
        'brand' => 'Corsair',
        'color' => 'White',
        'price' => 1200,
        'image' => 'https://s.alicdn.com/@sc04/kf/H2310c10188654639ae52be2f6d7b37e46.png_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/Hb7495d6fdf774a45a744cf0f5e919d8b8.png_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hcc8f38a94e0a47e09a8fe5b38ac8de71t.png_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hd9c12ca927c941e18c5cbea8605a161f1.png_720x720q50.jpg'
        ],
        'rating' => 4.7,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'John Doe',
                'rating' => 5,
                'comment' => 'This is a great product.'
            ],
            [
                'id' => 2,
                'name' => 'Jane Doe',
                'rating' => 4,
                'comment' => 'This is a great product.'
            ]
        ],
        'tags' => ['gaming', 'pc', 'computer'],
        'created_at' => '2022-01-01',
        'updated_at' => '2022-01-01'
    ],
    [
        'id' => 2,
        'name' => 'Apple iPhone 14 Pro Max',
        'description' => 'The iPhone 14 Pro Max features a Super Retina XDR display, A16 Bionic chip, and a pro camera system with advanced low-light performance.',
        'category' => 'Smartphones',
        'brand' => 'Apple',
        'color' => 'Space Black',
        'price' => 1199,
        'image' => 'https://s.alicdn.com/@sc04/kf/Ab277c16ace4b4a628302c5b569d7f6ea7.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/A350f508586984cef898a2acc9b1753335.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/A410eb4df47ed4b6f805dd82ba3357d560.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/A6f2ca054e3154abdafc0ad6b8a33e5613.jpg_720x720q50.jpg'
        ],
        'rating' => 4.9,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Alice Smith',
                'rating' => 5,
                'comment' => 'Unparalleled performance and amazing camera quality!'
            ],
            [
                'id' => 2,
                'name' => 'Bob Johnson',
                'rating' => 4,
                'comment' => 'Expensive but worth it for the features!'
            ]
        ],
        'tags' => ['smartphone', 'iphone', 'apple'],
        'created_at' => '2022-02-01',
        'updated_at' => '2022-02-01'
    ],
    [
        'id' => 3,
        'name' => 'Samsung 65" QLED TV',
        'description' => 'Enjoy the best picture quality with this 65-inch 4K QLED TV. With HDR support, it delivers vivid colors and excellent contrast.',
        'category' => 'Television',
        'brand' => 'Samsung',
        'color' => 'Black',
        'price' => 1500,
        'image' => 'https://s.alicdn.com/@sc04/kf/H5e90363beb78424da3120c44c1cfd0f6R.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/Hb21e356693e8438185e6aad33d8c5f31L.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H54807e5d939246a5b8268d872e4a234bd.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H4bf1379b6671436a8dc663cde40c5d92X.jpg_720x720q50.jpg'
        ],
        'rating' => 4.6,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Mark Lee',
                'rating' => 5,
                'comment' => 'Incredible picture quality, worth every penny.'
            ],
            [
                'id' => 2,
                'name' => 'Sara Tan',
                'rating' => 4,
                'comment' => 'Great TV but setup was a bit tricky.'
            ]
        ],
        'tags' => ['tv', 'samsung', 'qled'],
        'created_at' => '2022-03-01',
        'updated_at' => '2022-03-01'
    ],
    [
        'id' => 4,
        'name' => 'Sony WH-1000XM5 Wireless Headphones',
        'description' => 'Experience world-class noise cancellation and incredible sound quality with Sony’s flagship wireless headphones.',
        'category' => 'Headphones',
        'brand' => 'Sony',
        'color' => 'Black',
        'price' => 350,
        'image' => 'https://s.alicdn.com/@sc04/kf/H4076ae3022ad44b9bd611f0046c2a1a62.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/Hdefbc4e88afa4a1eb15e77b0a75eec43M.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hb0bc3ce4c39544f5907c8669b9021c49N.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H9c3abb9e27254b038ab7cf8e94d4a36bM.jpg_720x720q50.jpg'
        ],
        'rating' => 4.8,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Emily Davis',
                'rating' => 5,
                'comment' => 'These headphones are amazing for long flights!'
            ],
            [
                'id' => 2,
                'name' => 'Steve Clark',
                'rating' => 4,
                'comment' => 'Noise cancellation is great, but the ear cups are a bit tight.'
            ]
        ],
        'tags' => ['headphones', 'sony', 'noise-cancelling'],
        'created_at' => '2022-04-01',
        'updated_at' => '2022-04-01'
    ],
    [
        'id' => 5,
        'name' => 'Dell XPS 15 Laptop',
        'description' => 'The Dell XPS 15 features a powerful Intel Core i7 processor, 16GB of RAM, and a 512GB SSD, perfect for work and play.',
        'category' => 'Laptops',
        'brand' => 'Dell',
        'color' => 'Silver',
        'price' => 1200,
        'image' => 'https://s.alicdn.com/@sc04/kf/Hf64393c7a9dc404cab4bff1f91d168f4Y.png_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H1b2719a73b62491d8ecd306ca2aedfd1X.png_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hca28fa0137be488bbca2c9bccb7a53084.png_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H626ccf531da644a9972c9f79d2f21236Y.png_720x720q50.jpg'
        ],
        'rating' => 4.7,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Michael Harris',
                'rating' => 5,
                'comment' => 'Great laptop, super fast and sleek.'
            ],
            [
                'id' => 2,
                'name' => 'Karen Wilson',
                'rating' => 4,
                'comment' => 'Excellent performance, but battery life could be better.'
            ]
        ],
        'tags' => ['laptop', 'dell', 'xps'],
        'created_at' => '2022-05-01',
        'updated_at' => '2022-05-01'
    ],
    [
        'id' => 6,
        'name' => 'Fitbit Charge 5 Fitness Tracker',
        'description' => 'The Fitbit Charge 5 tracks your steps, heart rate, sleep, and more with built-in GPS for tracking outdoor workouts.',
        'category' => 'Fitness Tracker',
        'brand' => 'Fitbit',
        'color' => 'Plum',
        'price' => 180,
        'image' => 'https://s.alicdn.com/@sc04/kf/H9392466167a442d49f7214be9789c131Z.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H0e64059b4321484bb53fe16c51a734a0o.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/He5bd2e61316a48db8c112cb116375ee5S.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H82384b97292943d999d12e24620f2846g.jpg_720x720q50.jpg'
        ],
        'rating' => 4.4,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Jake Turner',
                'rating' => 5,
                'comment' => 'Great for fitness tracking, and the battery lasts a long time.'
            ],
            [
                'id' => 2,
                'name' => 'Olivia Brown',
                'rating' => 4,
                'comment' => 'I love the design, but the screen is a bit small.'
            ]
        ],
        'tags' => ['fitness', 'tracker', 'fitbit'],
        'created_at' => '2022-06-01',
        'updated_at' => '2022-06-01'
    ],
    [
        'id' => 7,
        'name' => 'Nintendo Switch OLED Model',
        'description' => 'The Nintendo Switch OLED Model features a larger 7-inch OLED screen, enhanced audio, and a wide variety of games to choose from.',
        'category' => 'Console',
        'brand' => 'Nintendo',
        'color' => 'White',
        'price' => 350,
        'image' => 'https://s.alicdn.com/@sc04/kf/H297db37a1dfe4c9c8864be40d0ef8561f.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H5d75fcc8fdd8422d90f069c89e085701L.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H1193cc81abd244e6a88dd2e175bec82fW.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H81508ac9c2e74f00be1180ae7f45b443H.jpg_720x720q50.jpg'
        ],
        'rating' => 4.6,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Chris Evans',
                'rating' => 5,
                'comment' => 'Love this console, the OLED screen is amazing!'
            ],
            [
                'id' => 2,
                'name' => 'Monica Lewis',
                'rating' => 4,
                'comment' => 'Perfect for gaming on the go!'
            ]
        ],
        'tags' => ['nintendo', 'switch', 'gaming'],
        'created_at' => '2022-07-01',
        'updated_at' => '2022-07-01'
    ],
    [
        'id' => 8,
        'name' => 'Sony PlayStation 5',
        'description' => 'The Sony PlayStation 5 delivers ultra-fast loading with an SSD and offers immersive gaming experiences with its new DualSense wireless controller.',
        'category' => 'Console',
        'brand' => 'Sony',
        'color' => 'White',
        'price' => 499,
        'image' => 'https://s.alicdn.com/@sc04/kf/H30f044c2486e40c0b93f7b9a172faa9aU.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H02f7cb6a2e984997a5d021c3df451fc3i.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H2c1c4c8f6c10459382b5eb0b19ff8e46j.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H20d8061115bb4d8886bae7cf662f7315s.jpg_720x720q50.jpg'
        ],
        'rating' => 4.8,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'James Turner',
                'rating' => 5,
                'comment' => 'Amazing console with incredible graphics and speed!'
            ],
            [
                'id' => 2,
                'name' => 'Anna Clark',
                'rating' => 4,
                'comment' => 'Great gaming console, but it could be a bit quieter.'
            ]
        ],
        'tags' => ['gaming', 'console', 'playstation'],
        'created_at' => '2022-08-01',
        'updated_at' => '2022-08-01'
    ],
    [
        'id' => 9,
        'name' => 'Bose QuietComfort 45',
        'description' => 'Bose QuietComfort 45 wireless headphones offer outstanding noise cancellation and a comfortable, lightweight design.',
        'category' => 'Headphones',
        'brand' => 'Bose',
        'color' => 'Silver',
        'price' => 329,
        'image' => 'https://s.alicdn.com/@sc04/kf/H999308d10e72434499b1f2e5bf321ca6Q.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/Hfbc4007b4d0b434cab203e5c62d0889cr.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H9058da6666fe4a93b46e0817b80c3137U.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hcbf654c5e8e44ff0bc1088c6bd71dd9du.jpg_720x720q50.jpg'
        ],
        'rating' => 4.7,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Robert Green',
                'rating' => 5,
                'comment' => 'Best noise-canceling headphones I have ever used!'
            ],
            [
                'id' => 2,
                'name' => 'Linda Martinez',
                'rating' => 4,
                'comment' => 'Great sound quality, but a bit tight after long use.'
            ]
        ],
        'tags' => ['headphones', 'bose', 'noise-canceling'],
        'created_at' => '2022-09-01',
        'updated_at' => '2022-09-01'
    ],
    [
        'id' => 10,
        'name' => 'HP Spectre x360 Laptop',
        'description' => 'The HP Spectre x360 is a convertible laptop with a stunning 4K OLED display, powerful Intel Core i7 processor, and a sleek design.',
        'category' => 'Laptops',
        'brand' => 'HP',
        'color' => 'Nightfall Black',
        'price' => 1499,
        'image' => 'https://s.alicdn.com/@sc04/kf/Heea65ee143bb4c538f7586f4c83c814cf.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H1f8de7d3780141c4a3f66fb74f5b8362n.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H8a33b4f17a6c4f5bb2a15be56cf396a8V.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H6b2552e97fa84158bccc36588d3dc312X.jpg_720x720q50.jpg'
        ],
        'rating' => 4.6,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Michael Black',
                'rating' => 5,
                'comment' => 'The best laptop I have ever owned! Excellent performance.'
            ],
            [
                'id' => 2,
                'name' => 'Jennifer Smith',
                'rating' => 4,
                'comment' => 'Love the design, but the battery life could be better.'
            ]
        ],
        'tags' => ['laptop', 'hp', 'spectre'],
        'created_at' => '2022-10-01',
        'updated_at' => '2022-10-01'
    ],
    [
        'id' => 11,
        'name' => 'Oculus Quest 2 VR Headset',
        'description' => 'The Oculus Quest 2 is an all-in-one virtual reality system, featuring immersive games and experiences without the need for a PC.',
        'category' => 'Virtual Reality',
        'brand' => 'Oculus',
        'color' => 'White',
        'price' => 299,
        'image' => 'https://s.alicdn.com/@sc04/kf/Haadf0162aca6440f8a0cfbc32695f452v.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H603ba8499fc1474496321ec256c57324v.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H8c46bb0d846c49f387a526e373200274f.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H263fd585433b40cdb237c391defc07a23.jpg_720x720q50.jpg'
        ],
        'rating' => 4.8,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Steven Harris',
                'rating' => 5,
                'comment' => 'Incredible VR experience! Highly recommend.'
            ],
            [
                'id' => 2,
                'name' => 'Rachel Brooks',
                'rating' => 4,
                'comment' => 'Great performance, but the fit could be better for larger heads.'
            ]
        ],
        'tags' => ['virtual reality', 'oculus', 'gaming'],
        'created_at' => '2022-11-01',
        'updated_at' => '2022-11-01'
    ],
    [
        'id' => 12,
        'name' => 'Logitech MX Master 3 Mouse',
        'description' => 'The Logitech MX Master 3 is a wireless mouse with customizable buttons, perfect for both productivity and gaming.',
        'category' => 'Mouse',
        'brand' => 'Logitech',
        'color' => 'Graphite',
        'price' => 99,
        'image' => 'https://s.alicdn.com/@sc04/kf/H4eced4dfc5124de88f5009c289c3f653g.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/Hdb5dcd391da0498489f555908284f870I.png_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H9758996177e349599ce0d02298da027f1.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hab14b2bda5ca4389b593b016dc797979I.jpg_720x720q50.jpg'
        ],
        'rating' => 4.7,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'George Walker',
                'rating' => 5,
                'comment' => 'Best mouse I have ever used. Smooth and responsive.'
            ],
            [
                'id' => 2,
                'name' => 'Nancy Green',
                'rating' => 4,
                'comment' => 'Great for productivity, but it could use a bit more grip.'
            ]
        ],
        'tags' => ['mouse', 'logitech', 'wireless'],
        'created_at' => '2022-12-01',
        'updated_at' => '2022-12-01'
    ],
    [
        'id' => 13,
        'name' => 'GoPro HERO10 Black Camera',
        'description' => 'The GoPro HERO10 Black features stunning 5.3K video and HyperSmooth 4.0 stabilization, ideal for capturing action footage.',
        'category' => 'Camera',
        'brand' => 'GoPro',
        'color' => 'Black',
        'price' => 499,
        'image' => 'https://s.alicdn.com/@sc04/kf/H8c3d35900c4d48569b4dba19beb360c9i.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H815d27ad1fcb401bb691deec7b143c1fk.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H28517c0120a7468bb54b8d1bd435f5a4v.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hdc1355068b6c4c5998ae347fcbe281e0J.jpg_720x720q50.jpg'
        ],
        'rating' => 4.9,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Sam Carter',
                'rating' => 5,
                'comment' => 'Excellent video quality, perfect for adventure shoots!'
            ],
            [
                'id' => 2,
                'name' => 'Claire Turner',
                'rating' => 5,
                'comment' => 'The stabilization is incredible, great for smooth footage.'
            ]
        ],
        'tags' => ['gopro', 'camera', 'action'],
        'created_at' => '2023-01-01',
        'updated_at' => '2023-01-01'
    ],
    [
        'id' => 14,
        'name' => 'Apple MacBook Pro 16"',
        'description' => 'The Apple MacBook Pro 16" features a stunning Retina display, powerful M1 Pro chip, and up to 64GB of unified memory for maximum performance.',
        'category' => 'Laptops',
        'brand' => 'Apple',
        'color' => 'Space Gray',
        'price' => 2399,
        'image' => 'https://s.alicdn.com/@sc04/kf/H29bd85f32cb742be87702e4346391fe1L.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H29bd85f32cb742be87702e4346391fe1L.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H29bd85f32cb742be87702e4346391fe1L.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H29bd85f32cb742be87702e4346391fe1L.jpg_720x720q50.jpg'
        ],
        'rating' => 4.8,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'David White',
                'rating' => 5,
                'comment' => 'The best laptop I have ever owned! Incredible performance.'
            ],
            [
                'id' => 2,
                'name' => 'Sophia Brown',
                'rating' => 4,
                'comment' => 'Love the design, but the battery life could be better.'
            ]
        ],
        'tags' => ['laptop', 'apple', 'macbook'],
        'created_at' => '2023-02-01',
        'updated_at' => '2023-02-01'
    ],
    [
        'id' => 15,
        'name' => 'Samsung Galaxy S22 Ultra',
        'description' => 'The Samsung Galaxy S22 Ultra features a 6.8-inch Dynamic AMOLED display, S Pen support, and a pro-grade camera system for stunning photos and videos.',
        'category' => 'Smartphones',
        'brand' => 'Samsung',
        'color' => 'Phantom Black',
        'price' => 1199,
        'image' => 'https://s.alicdn.com/@sc04/kf/Af53b0f493d7541fe97be142f99c8a94cv.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/A19a5f8217e4e46eab10b2498362ff73d9.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/A1679d682b2a949b58973bf8ed3e45edfo.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Aba86abd1d5634a20a2571e8c501abaa6G.jpg_720x720q50.jpg'
        ],
        'rating' => 4.9,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Emma Wilson',
                'rating' => 5,
                'comment' => 'The camera quality is amazing, and the S Pen is a great addition!'
            ],
            [
                'id' => 2,
                'name' => 'Daniel Clark',
                'rating' => 4,
                'comment' => 'Great phone, but the battery life could be better.'
            ]
        ],
        'tags' => ['smartphone', 'samsung', 'galaxy'],
        'created_at' => '2023-03-01',
        'updated_at' => '2023-03-01'
    ],
    [
        'id' => 16,
        'name' => 'LG OLED C1 Series TV',
        'description' => 'The LG OLED C1 Series TV features a 4K OLED display, Dolby Vision IQ, and Dolby Atmos for an immersive viewing experience.',
        'category' => 'Television',
        'brand' => 'LG',
        'color' => 'Black',
        'price' => 1999,
        'image' => 'https://s.alicdn.com/@sc04/kf/Hfb082bd71f12489e8cfcee007b336263g.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/H25860672826f4d54ab9e8ed687e20d50G.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H51954375d2e34965b384fec287a4bfd9S.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H2791b5917f244c67adc8082b071c2f48P.jpg_720x720q50.jpg'
        ],
        'rating' => 4.7,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Sophie Turner',
                'rating' => 5,
                'comment' => 'Incredible picture quality, worth every penny.'
            ],
            [
                'id' => 2,
                'name' => 'Jack Harris',
                'rating' => 4,
                'comment' => 'Great TV but setup was a bit tricky.'
            ]
        ],
        'tags' => ['tv', 'lg', 'oled'],
        'created_at' => '2023-04-01',
        'updated_at' => '2023-04-01'
    ],
    [
        'id' => 17,
        'name' => 'JBL Flip 6 Portable Speaker',
        'description' => 'The JBL Flip 6 is a portable Bluetooth speaker with powerful sound, IP67 waterproof rating, and up to 12 hours of playtime.',
        'category' => 'Speakers',
        'brand' => 'JBL',
        'color' => 'Black',
        'price' => 129,
        'image' => 'https://s.alicdn.com/@sc04/kf/H56a66e9dd9574ab3ab470c6433f8c7bcF.jpg_720x720q50.jpg',
        'images' => [
            'https://s.alicdn.com/@sc04/kf/Hb3f48fc23f6344b28b1a095bd08b45fbZ.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/Hc13e22f5b33f4641b8a3a691bfb533bet.jpg_720x720q50.jpg',
            'https://s.alicdn.com/@sc04/kf/H2f4c3180c0714d0391046d61facee45fg.jpg_720x720q50.jpg'
        ],
        'rating' => 4.6,
        'reviews' => [
            [
                'id' => 1,
                'name' => 'Oliver White',
                'rating' => 5,
                'comment' => 'Great sound quality and battery life, perfect for outdoor use!'
            ],
            [
                'id' => 2,
                'name' => 'Ella Brown',
                'rating' => 4,
                'comment' => 'Love the design, but the bass could be stronger.'
            ]
        ],
        'tags' => ['speakers', 'jbl', 'bluetooth'],
        'created_at' => '2023-05-01',
        'updated_at' => '2023-05-01'
    ],
];




// handle requests
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $product = array_filter($products, function ($product) use ($id) {
        return $product['id'] == $id;
    });
    echo json_encode(array_values($product));
} else {
    echo json_encode($products);
}
