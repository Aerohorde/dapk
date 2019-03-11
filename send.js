// $(document).on('submit','#form',function(){
//         //     $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
//                     var form_data = $(this).serialize(); //собераем все данные из формы
//                     $.ajax({
//                     url: "/send.php", //путь до php фаила отправителя
//                     type: "POST", //Метод отправки
//                     data: form_data,
//                     success: function() {
//                            //код в этом блоке выполняется при успешной отправке сообщения
//                            alert("Ваше сообщение отпрвлено!");
//                           }});
//                   });
//                 })     
                    
                $(document).ready(function(){
                        $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
                                var form_data = $(this).serialize(); //собераем все данные из формы
                                $.ajax({
                                url: "/send.php", //путь до php фаила отправителя
                                type: "POST", //Метод отправки
                                data: form_data,
                                success: function() {
                                       //код в этом блоке выполняется при успешной отправке сообщения
                                       alert("Ваше сообщение отпрвлено!");
                                      }});
                              });
                            })     
                                