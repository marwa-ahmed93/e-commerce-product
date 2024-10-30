
$(document).ready(function () {
    let sectionProto = $("#portfolio").offset().top;

    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();  // Get the current scroll position dynamically

        if (wScroll > sectionProto - 100) {  // Compare the scroll position
            $("#main-nav").css("backgroundColor", "rgb(207, 206, 206)");  // Change navbar background to red
            $("#btnUp").fadeIn(500)

        } else {
            $('#main-nav').css('backgroundColor', 'transparent');  // Revert navbar background to transparent
            $("#btnUp").fadeOut(500)

        }
    });

    $("#btnUp").click(function () {

        $("html , body").animate({ scrollTop: 0 }, 500);
    
      })




    var typed = new Typed('#element', {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
      loop: true,
    });



    // showing data
    let loading ;
    let allProduct = [];
   
    async function getProduct() {
        try {
            // Show loading indicator
            $(".loading").css("opacity", "1");
    
            // Fetch data from API
            let apiPoduct = await fetch(`https://fakestoreapi.com/products`);

                    allProduct = await apiPoduct.json();
                    allProduct = allProduct;
                    console.log(allProduct)
                    displayPrduct()
    
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            // Hide loading indicator
            $(".loading").css("opacity", "0");
        }
    }


    getProduct()
    function displayPrduct() {

        let carttona = '';
        for (let i = 0; i < allProduct.length; i++) {

            carttona += `     
          <div class="col-md-4">
        <div>
             <div class="rate p-3"><span>${allProduct[i].rating.rate}</span></div>
        <div class="showImg"><img class="img-fluid p-5" src="${allProduct[i].image}" alt=""></div>
        

      <div class="divH py-3">  <h3 class="text-muted">${allProduct[i].title}</h3> 
        <p class="showPdata"><span class="">Price:</span> ${allProduct[i].price }$ </p>
      </div>
  
     
    
      </div>
    </div>
    
       `;
        }
        document.getElementById("productRow").innerHTML = carttona;

    }




})


