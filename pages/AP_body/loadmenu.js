$(function () {
    var data = {
        menu: [
            {
                name: 'Check In',
                link: 'new-regis.html',
                sub: null
            }
            
            ,{
                name: 'Check Out',
                link: 'new-checkout.html',
                sub: null
            }
            ,{
                name: 'Motuary Details',
                link: 'new-motuary_details.html',
                sub: null
            }

            // ,{
            //     name: 'England',
            //     link: '1',
            //     sub: [{
            //         name: 'Arsenal',
            //         link: '0-0',
            //         sub: null
            //     }, {
            //         name: 'Liverpool',
            //         link: '0-1',
            //         sub: null
            //     }, {
            //         name: 'Manchester United',
            //         link: '0-2',
            //         sub: null
            //     }]
            // }
        ]
    };

    var str = "";
    $.each( data.menu , function (key , value) {

        // <li class="d-flex flex-column active">
        //     <a class="nav-link" href="../widgets/widgets.html">
        //         <i class="nav-icon ti-widget"></i>
        //         <p>Widgets</p>
        //     </a>
        // </li>

        if(value.sub==null){
            str += 
            `<li class="d-flex flex-column">
                <a class="nav-link" href="`+value.link+`">
                    <i class="nav-icon ti-widget"></i>
                    <p>`+value.name+`</p>
                </a>
            </li>`;
        }else{
            str += 
            `<li class="d-flex flex-column">
                    <a class="nav-link" href="#tables`+key+`" aria-expanded="false" class="nav-link collapsed" data-toggle="collapse">
                        <p>`+value.name+`
                            <i class="fa fa-sort-desc submenu-toggle"></i>
                        </p>
                    </a>

                    <div class="collapse" id="tables`+key+`" role="navigation" aria-expanded="false">
                        <ul class="nav flex-column ps-container ps-theme-default">`
                        $.each(value.sub, function (keyin , valuein) {
                            str +=
                            `<li>
                                <i class="far fa-address-card"></i>
                                <a class="nav-link" href="`+valuein.link+`">`+valuein.name+`</a>
                            </li>`;
                        });
            str +=      `</ul>
                    </div>
                </li></a>
            </li>`;
        }
    });
    $("#menu").append(str);
    str=null;
});