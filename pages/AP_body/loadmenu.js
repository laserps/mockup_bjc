$(function () {
    var data = {
        menu: [
            {
                name: 'Registration',
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
        if(value.sub==null){
            str += 
            `<li class="d-flex flex-column">
                <a href="`+value.link+`">
                <i class="nav-icon"></i>
                <p>`+value.name+`</p>
                </a>
            </li>`;
        }else{
            str += 
            `<li class="d-flex flex-column">
                    <a href="#tables`+key+`" aria-expanded="false" class="nav-link collapsed" data-toggle="collapse">
                        <p>`+value.name+`
                            <i class="fa fa-sort-desc submenu-toggle"></i>
                        </p>
                    </a>

                    <div class="collapse" id="tables`+key+`" role="navigation" aria-expanded="false">
                        <ul class="nav flex-column ps-container ps-theme-default">`
                        $.each(value.sub, function (keyin , valuein) {
                            str +=
                            `<li>
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