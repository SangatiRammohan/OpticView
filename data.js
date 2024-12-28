const data = [
    {
        name: "Canon",
        cameras: [
            {
                "model": "Canon EOS R5",
                "image_url": "/OpticView/assests/canon/canon EOS R5.webp",
                "description": "A professional-grade mirrorless camera with cutting-edge features.",
                "features": [
                    "45MP Full-Frame CMOS Sensor",
                    "8K video recording",
                    "In-body image stabilization"
                ],
                "price": 3899,
                "rating": 4.8
            },
            {
                "model": "Canon EOS R6",
                "image_url": "/OpticView/assests/canon/Canon EOS R6.png",
                "description": "A versatile mirrorless camera for both photography and videography.",
                "features": [
                    "20.1MP Full-Frame CMOS Sensor",
                    "4K60p video",
                    "Dual Pixel CMOS AF II"
                ],
                "price": 2499,
                "rating": 4.7
            },
            {
                "model": "Canon EOS 90D",
                "image_url": "/OpticView/assests/canon/Canon EOS 90D.jpg",
                "description": "A DSLR with high resolution and fast autofocus.",
                "features": [
                    "32.5MP APS-C CMOS Sensor",
                    "10 fps continuous shooting",
                    "4K UHD video recording"
                ],
                "price": 1199,
                "rating": 4.6
            },
            {
                "model": "Canon EOS Rebel T8i",
                "image_url": "/OpticView/assests/canon/Canon EOS Rebel T8i.jpg",
                "description": "An entry-level DSLR offering advanced features.",
                "features": [
                    "24.1MP APS-C CMOS Sensor",
                    "4K video",
                    "Vari-angle touchscreen"
                ],
                "price": 899,
                "rating": 4.5
            },
            {
                "model": "Canon PowerShot G7 X Mark III",
                "image_url": "/OpticView/assests/canon/Canon PowerShot G7 X Mark III.jpg",
                "description": "A compact camera ideal for vloggers and content creators.",
                "features": [
                    "20.1MP 1-inch CMOS Sensor",
                    "4K video",
                    "Live streaming capabilities"
                ],
                "price": 749,
                "rating": 4.6
            },
            {
                "model": "Canon EOS M50 Mark II",
                "image_url": "/OpticView/assests/canon/Canon EOS M50 Mark II.jpg",
                "description": "A compact and lightweight mirrorless camera.",
                "features": [
                    "24.1MP APS-C CMOS Sensor",
                    "4K video",
                    "Vari-angle LCD screen"
                ],
                "price": 699,
                "rating": 4.4
            },
            {
                "model": "Canon EOS-1D X Mark III",
                "image_url": "/OpticView/assests/canon/Canon EOS-1D X Mark III.jpg",
                "description": "A flagship DSLR for professional photographers.",
                "features": [
                    "20.1MP Full-Frame CMOS Sensor",
                    "16 fps continuous shooting",
                    "4K60p video"
                ],
                "price": 6499,
                "rating": 4.9
            },
            {
                "model": "Canon EOS RP",
                "image_url": "/OpticView/assests/canon/Canon EOS RP.jpg",
                "description": "A compact and affordable full-frame mirrorless camera.",
                "features": [
                    "26.2MP Full-Frame CMOS Sensor",
                    "4K video recording",
                    "Dual Pixel AF"
                ],
                "price": 999,
                "rating": 4.5
            },
            {
                "model": "Canon EOS R3",
                "image_url": "/OpticView/assests/canon/Canon EOS R3.webp",
                "description": "A high-performance mirrorless camera for professionals.",
                "features": [
                    "24.1MP Stacked BSI CMOS Sensor",
                    "6K RAW video",
                    "Eye Control AF"
                ],
                "price": 5999,
                "rating": 4.9
            },
            {
                "model": "Canon PowerShot SX70 HS",
                "image_url": "/OpticView/assests/canon/Canon PowerShot SX70 HS.jpg",
                "description": "A bridge camera with an ultra-zoom lens.",
                "features": [
                    "20.3MP CMOS Sensor",
                    "65x optical zoom",
                    "4K video"
                ],
                "price": 599,
                "rating": 4.4
            }
        ]
    },
    {
        name: "Nikon",
        cameras: [
            {
                "model": "Nikon Z9",
                "image_url": "/OpticView/assests/nikon/Nikon Z9.jpg",
                "description": "A flagship mirrorless camera for professionals.",
                "features": [
                    "45.7MP Stacked CMOS Sensor",
                    "8K30p video",
                    "120 fps burst shooting"
                ],
                "price": 5499,
                "rating": 4.9
            },
            {
                "model": "Nikon D850",
                "image_url": "/OpticView/assests/nikon/Nikon D850.png",
                "description": "A full-frame DSLR with exceptional image quality.",
                "features": [
                    "45.7MP FX-Format CMOS Sensor",
                    "4K UHD video recording",
                    "7 fps continuous shooting"
                ],
                "price": 2999,
                "rating": 4.8
            },
            {
                "model": "Nikon Z fc",
                "image_url": "/OpticView/assests/nikon/Nikon Z fc.png",
                "description": "A retro-inspired mirrorless camera with modern performance.",
                "features": [
                    "20.9MP DX-Format CMOS Sensor",
                    "4K UHD video",
                    "Compact and lightweight design"
                ],
                "price": 959,
                "rating": 4.7
            },
            {
                "model": "Nikon Z7 II",
                "image_url": "/OpticView/assests/nikon/Nikon Z7 II.jpg",
                "description": "A high-resolution mirrorless camera for professionals.",
                "features": [
                    "45.7MP Full-Frame Sensor",
                    "4K60p video",
                    "Dual processors"
                ],
                "price": 2999,
                "rating": 4.8
            },
            {
                "model": "Nikon Z6 II",
                "image_url": "/OpticView/assests/nikon/Nikon Z6 II.webp",
                "description": "A versatile mirrorless camera with robust features.",
                "features": [
                    "24.5MP Full-Frame Sensor",
                    "4K UHD video",
                    "273-point hybrid AF"
                ],
                "price": 1999,
                "rating": 4.7
            },
            {
                "model": "Nikon D780",
                "image_url": "/OpticView/assests/nikon/Nikon D780.jpg",
                "description": "A full-frame DSLR for hybrid shooters.",
                "features": [
                    "24.5MP BSI CMOS Sensor",
                    "4K UHD video",
                    "Advanced autofocus"
                ],
                "price": 2299,
                "rating": 4.7
            },
            {
                "model": "Nikon COOLPIX P1000",
                "image_url": "/OpticView/assests/nikon/Nikon COOLPIX P1000.webp",
                "description": "A superzoom bridge camera for distant subjects.",
                "features": [
                    "16MP CMOS Sensor",
                    "125x optical zoom",
                    "4K UHD video"
                ],
                "price": 999,
                "rating": 4.6
            },
            {
                "model": "Nikon D5600",
                "image_url": "/OpticView/assests/nikon/Nikon D5600.jpg",
                "description": "A compact DSLR for entry-level photographers.",
                "features": [
                    "24.2MP APS-C CMOS Sensor",
                    "3.2-inch vari-angle touchscreen",
                    "Bluetooth connectivity"
                ],
                "price": 699,
                "rating": 4.5
            },
            {
                "model": "Nikon Z50",
                "image_url": "/OpticView/assests/nikon/Nikon Z50.png",
                "description": "A lightweight DX-format mirrorless camera.",
                "features": [
                    "20.9MP CMOS Sensor",
                    "4K UHD video",
                    "Flip-down touchscreen"
                ],
                "price": 859,
                "rating": 4.6
            },
            {
                "model": "Nikon Z5",
                "image_url": "/OpticView/assests/nikon/Nikon Z5.webp",
                "description": "An affordable entry into full-frame mirrorless photography.",
                "features": [
                    "24.3MP Full-Frame CMOS Sensor",
                    "4K UHD video",
                    "Dual SD card slots"
                ],
                "price": 1299,
                "rating": 4.5
            }
        ]
    },
    {
        name: "Sony",
        cameras: [
            {
                "model": "Sony Alpha 7 IV",
                "image_url": "/OpticView/assests/sony/Sony Alpha 7 IV.webp",
                "description": "A hybrid mirrorless camera for both photo and video.",
                "features": [
                    "33MP Full-Frame Exmor R CMOS Sensor",
                    "4K60p video",
                    "Real-time Eye AF"
                ],
                "price": 2498,
                "rating": 4.8
            },
            {
                "model": "Sony Alpha 1",
                "image_url": "/OpticView/assests/sony/Sony Alpha 1.jpg",
                "description": "A flagship model with unparalleled speed and resolution.",
                "features": [
                    "50.1MP Full-Frame Sensor",
                    "8K30p video recording",
                    "30 fps continuous shooting"
                ],
                "price": 6499,
                "rating": 4.9
            },
            {
                "model": "Sony ZV-E10",
                "image_url": "/OpticView/assests/sony/Sony ZV-E10.jpg",
                "description": "A compact mirrorless camera designed for vloggers.",
                "features": [
                    "24.2MP APS-C Exmor CMOS Sensor",
                    "4K video",
                    "Fully articulating touchscreen"
                ],
                "price": 698,
                "rating": 4.6
            },
            {
                "model": "Sony Alpha 7R V",
                "image_url": "/OpticView/assests/sony/Sony Alpha 7R V.png",
                "description": "A high-resolution mirrorless camera with cutting-edge technology.",
                "features": [
                    "61MP Full-Frame Exmor R CMOS Sensor",
                    "8K video",
                    "Pixel Shift Multi Shooting"
                ],
                "price": 3899,
                "rating": 4.9
            },
            {
                "model": "Sony RX100 VII",
                "image_url": "/OpticView/assests/sony/Sony RX100 VII.jpg",
                "description": "A premium compact camera with powerful zoom capabilities.",
                "features": [
                    "20.1MP 1-inch Exmor RS CMOS Sensor",
                    "4K HDR video",
                    "24-200mm zoom lens"
                ],
                "price": 1299,
                "rating": 4.7
            },
            {
                "model": "Sony FX3",
                "image_url": "/OpticView/assests/sony/Sony FX3.jpg",
                "description": "A compact cinema camera designed for filmmakers.",
                "features": [
                    "12.1MP Full-Frame Sensor",
                    "4K120p video",
                    "S-Cinetone color profile"
                ],
                "price": 3899,
                "rating": 4.8
            },
            {
                "model": "Sony Alpha 6400",
                "image_url": "/OpticView/assests/sony/Sony Alpha 6400.jpg",
                "description": "A versatile APS-C mirrorless camera for creators.",
                "features": [
                    "24.2MP APS-C CMOS Sensor",
                    "4K video",
                    "Real-time Eye AF"
                ],
                "price": 898,
                "rating": 4.6
            },
            {
                "model": "Sony Alpha 9 II",
                "image_url": "/OpticView/assests/sony/Sony Alpha 9 II.jpg",
                "description": "A professional sports and action camera with lightning-fast speed.",
                "features": [
                    "24.2MP Full-Frame Exmor RS CMOS Sensor",
                    "20 fps continuous shooting",
                    "Advanced AF tracking"
                ],
                "price": 4499,
                "rating": 4.9
            },
            {
                "model": "Sony Alpha ZV-1",
                "image_url": "/OpticView/assests/sony/Sony Alpha ZV-1.jpg",
                "description": "A compact vlogging camera with impressive features.",
                "features": [
                    "20.1MP 1-inch Exmor RS CMOS Sensor",
                    "4K video",
                    "Directional 3-capsule mic"
                ],
                "price": 748,
                "rating": 4.7
            },
            {
                "model": "Sony Alpha 7S III",
                "image_url": "/OpticView/assests/sony/Sony Alpha 7S III.jpg",
                "description": "A low-light powerhouse for videographers and filmmakers.",
                "features": [
                    "12.1MP Full-Frame Sensor",
                    "4K120p video",
                    "15-stop dynamic range"
                ],
                "price": 3499,
                "rating": 4.8
            }
        ]
    },
    {
        name: "Panasonic",
        cameras: [
            {
                "model": "Panasonic Lumix GH6",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix GH6.jpg",
                "description": "A top choice for professional videographers.",
                "features": [
                    "25.2MP Micro Four Thirds Sensor",
                    "5.7K60p video",
                    "7.5-stop Dual IS 2 stabilization"
                ],
                "price": 2199,
                "rating": 4.8
            },
            {
                "model": "Panasonic Lumix S5 II",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix S5 II.avif",
                "description": "A lightweight full-frame camera with advanced video features.",
                "features": [
                    "24.2MP Full-Frame CMOS Sensor",
                    "6K video recording",
                    "Phase Detection AF"
                ],
                "price": 1999,
                "rating": 4.7
            },
            {
                "model": "Panasonic Lumix G100",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix G100.jpg",
                "description": "A vlogger-friendly camera with advanced audio features.",
                "features": [
                    "20.3MP Micro Four Thirds Sensor",
                    "4K video",
                    "OZO Audio with subject tracking"
                ],
                "price": 749,
                "rating": 4.5
            },
            {
                "model": "Panasonic Lumix S1H",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix S1H.jpg",
                "description": "A cinema-quality full-frame camera for filmmakers.",
                "features": [
                    "24.2MP Full-Frame Sensor",
                    "6K video recording",
                    "10-bit internal recording"
                ],
                "price": 3999,
                "rating": 4.9
            },
            {
                "model": "Panasonic Lumix GX9",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix GX9.jpg",
                "description": "A compact mirrorless camera for travel photographers.",
                "features": [
                    "20.3MP Micro Four Thirds Sensor",
                    "4K video",
                    "Tilting EVF"
                ],
                "price": 997,
                "rating": 4.6
            },
            {
                "model": "Panasonic Lumix FZ1000 II",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix FZ1000 II.jpg",
                "description": "A versatile bridge camera with a large sensor and powerful zoom.",
                "features": [
                    "20.1MP 1-inch Sensor",
                    "4K video",
                    "16x optical zoom"
                ],
                "price": 897,
                "rating": 4.5
            },
            {
                "model": "Panasonic Lumix S1",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix S1.avif",
                "description": "A robust full-frame mirrorless camera for professionals.",
                "features": [
                    "24.2MP Full-Frame CMOS Sensor",
                    "4K60p video",
                    "5-axis Dual IS"
                ],
                "price": 2499,
                "rating": 4.7
            },
            {
                "model": "Panasonic Lumix LX100 II",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix LX100 II.jpg",
                "description": "A premium compact camera with a large sensor.",
                "features": [
                    "17MP Four Thirds Sensor",
                    "4K video",
                    "Leica DC Vario-Summilux lens"
                ],
                "price": 999,
                "rating": 4.6
            },
            {
                "model": "Panasonic Lumix G95",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix G95.jpg",
                "description": "A rugged mirrorless camera for outdoor photography.",
                "features": [
                    "20.3MP Micro Four Thirds Sensor",
                    "4K video",
                    "Weather-sealed body"
                ],
                "price": 1199,
                "rating": 4.6
            },
            {
                "model": "Panasonic Lumix ZS200",
                "image_url": "/OpticView/assests/panasonic/Panasonic Lumix ZS200.avif",
                "description": "A compact travel zoom camera with a large sensor.",
                "features": [
                    "20.1MP 1-inch Sensor",
                    "15x optical zoom",
                    "4K video"
                ],
                "price": 799,
                "rating": 4.5
            }
        ]
    }
]



let bodyData = document.getElementById("fulldata")
let back = document.getElementById("back")
let footer = document.querySelector(".footer")
console.log(back)
function displayBrandCards(filteredData) {
    footer.style.position = "relative"
    footer.style.top = "250px"
    back.classList.add("active")

    bodyData.innerHTML = ""
    bodyData.style.position = "relative"
    bodyData.style.top = "120px"
    bodyData.style.display = "flex"
    bodyData.style.flexWrap = "wrap"
    bodyData.style.justifyContent = "center"
    bodyData.style.alignItems = "center"
    bodyData.style.gap = "20px"

    filteredData.forEach(brand => {
        brand.cameras.forEach(camera => {
            let card = document.createElement("div");
            card.classList.add("brand-card");
            card.innerHTML = `
               <div class="imagesDiv">
                <img src="${camera.image_url}" alt="${camera.model}" />
                </div>
               <div class="imagesRight">
                <h2>${camera.model}</h2>
                <span class="model-line"> </span>
              
                <p>Rating: ${camera.rating} ⭐</p>
                    <h1>Price: &#8377 ${camera.price}</h1>
                <button class="add-to-cart"> <i class='bx bx-shopping-bag' ></i>  Add to Cart</button>
                <button class="buy-now"><i class='bx bx-cart' ></i>  Buy Now</button>

                 <div id="description">
                 <h3> Product Highlists : </h3>
                    <h5>Description:</h5>
                    <p>${camera.description}</p>
                    <h5>Features:</h5>
                    <p>${camera.features}</p>
                </div>
                </div>

            `;
            bodyData.append(card);



            // ======================================================= cart in all products page =================================
            // Add to Cart functionality in data itteration
            card.querySelector(".add-to-cart").addEventListener("click", () => {

                let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

                cartItems.push(camera);

                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your item is added to cart ",
                    showConfirmButton: true,
                    timer: 3000
                });

            }
            );

            //  ==========================================================Buy now ===========================================
            // Buy Now functionality
            card.querySelector(".buy-now").addEventListener("click", () => {
                Swal.fire({
                    title: "Do you want to Buy this Item ?",
                    // showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "yes",
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                         window.location.href="/OpticView/payment/pay.html"
                    }
                  });
            });


        })
    })

}



let searchBar = document.getElementById("search-input")
console.log(searchBar)


// Button Elements
let allProductsBtn = document.getElementById("one");
let canonBtn = document.getElementById("two");
let nikonBtn = document.getElementById("three");
let panasonicBtn = document.getElementById("four");
let sonyBtn = document.getElementById("five");
console.log(allProductsBtn, canonBtn, nikonBtn, panasonicBtn, sonyBtn)
// Function to filter cameras by brand
function filterByBrand(brandName) {
    if (brandName === "all") {
        displayBrandCards(data); // Display all products
    } else {
        let filteredData = data.filter(brand => brand.name.toLowerCase() === brandName.toLowerCase());
        displayBrandCards(filteredData); // Display filtered products
    }
}


// Event Listeners for Buttons
allProductsBtn.addEventListener("click", () => filterByBrand("all"));
canonBtn.addEventListener("click", () => filterByBrand("Canon"));
nikonBtn.addEventListener("click", () => filterByBrand("Nikon"));
panasonicBtn.addEventListener("click", () => filterByBrand("Panasonic"));
sonyBtn.addEventListener("click", () => filterByBrand("Sony"));


searchBar.addEventListener("input", (e) => {
    let searchTerm = e.target.value.toLowerCase();

    // Clear the display if the search term is empty
    if (searchTerm === '') {
        divcard.innerHTML = "";  // Clear the card display when the search is empty
        return;
    }

    // Otherwise, filter the data
    let filteredData = data.map(brand => {
        let filteredCameras = brand.cameras.filter(camera => {
            // Ensure camera.features is a string before calling .toLowerCase()
            const features = typeof camera.features === 'string' ? camera.features : '';
            const description = typeof camera.description === 'string' ? camera.description : '';
            const model = typeof camera.model === 'string' ? camera.model : '';

            return model.toLowerCase().includes(searchTerm) ||
                description.toLowerCase().includes(searchTerm) ||
                features.toLowerCase().includes(searchTerm);
        });
        return { ...brand, cameras: filteredCameras };
    }).filter(brand => brand.cameras.length > 0); // Remove brands with no matching cameras

    // Display the filtered data
    displayBrandCards(filteredData);
});




  





















