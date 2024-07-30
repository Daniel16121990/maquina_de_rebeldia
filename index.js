$(document).ready(function() {
    $('#calendar').fullCalendar({
        locale: 'es',
        events: [
            {
                title: 'Disponible para Contrataciones',
                start: '2024-08-01',
                color: 'green',
                url: 'https://via.placeholder.com/150' // URL de la imagen
            },
            {
                title: 'Evento Reservado',
                start: '2024-08-10',
                color: 'red',
                url: 'https://via.placeholder.com/150'
            },
            {
                title: 'No Disponible',
                start: '2024-08-15',
                end: '2024-08-17',
                color: 'yellow'
            }
        ],
        eventRender: function(event, element) {
            if (event.url) {
                element.find('.fc-title').append('<br/><img src="' + event.url + '" class="event-image" style="width:100%;"/>');
            }
        },
        eventClick: function(event) {
            if (event.url) {
                $.magnificPopup.open({
                    items: {
                        src: event.url
                    },
                    type: 'image'
                });
                return false; // prevent the browser from following the link
            }
        }
    });
});
