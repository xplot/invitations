var inviteBindings = {
    '.event-name': 'title',

    '.event-start-date': 'start-date',
    '.event-start-time': 'start-time',
    '.event-end-date': 'end-date',
    '.event-end-time': 'end-time',
    '.event-description': 'description',
    '.event-address-street': 'address.street',
    '.event-address-suite': 'address.suite',
    '.event-address-city': 'address.city',
    '.event-address-zip': 'address.zip',
    '.event-address-state': {
        observe: 'address.state',
        selectOptions: {
            collection: function() {
                return [
                    {value: null, label: ""},
                    {value: "FL", label: "Florida"},
                    {value: "02", label: "February"},
                    {value: "03", label: "March"},
                    {value: "04", label: "April"},
                    {value: "05", label: "May"},
                    {value: "06", label: "June"},
                    {value: "07", label: "July"},
                    {value: "08", label: "August"},
                    {value: "09", label: "September"},
                    {value: "10", label: "October"},
                    {value: "11", label: "November"},
                    {value: "12", label: "December"},
                ]
            }
        }
    },
    '.event-start-date-formatted': {
        observe: ['start-date','start-time'],
        onGet: function (values) {
            if(Date.parse(values[0] + ' ' + values[1]))
                return 'From: ' + values[0] + ' ' + values[1];
        }
    },
    '.event-end-date-formatted': {
        observe: ['end-date','end-time'],
        onGet: function (values) {
            return 'To: ' + values[0] + ' ' +  values[1];
        }
    },
    '.event-address-state-city': {
        observe: ['address.state','address.city'],
        onGet: function (values) {
            var state = values[0] || '';
            var city = values[1] || '';
            if(state == null && city == null)
                return '';
            return city + ', ' + state;
        }
    },
    '.event-address-street-with-number': {
        observe: ['address.street', 'address.suite'],
        onGet: function (values) {
            var street = values[0] || '';
            var suite = values[1] || '';
            return street + ' ' + suite;
        }
    }
};
