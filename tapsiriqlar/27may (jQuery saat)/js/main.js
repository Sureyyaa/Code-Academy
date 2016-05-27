      setInterval(function f () {

             zaman=new Date();
              san=zaman.getSeconds();
              deq=zaman.getMinutes();
              st=zaman.getHours();

            $(".saniye").css({
                  "transform":"rotate("+san*6+"deg",
            })

            $(".deqiqe").css({
                  "transform":"rotate("+deq*6+"deg",
            })

            $(".saatt").css({
                  "transform":"rotate("+((st*30)+(deq/2))+"deg",
            })
             
      }, 1000);