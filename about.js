const About = Vue.component('About', {
    template: /* html */ `
        <div :style="style.container"> 
            awfawf
        </div>
    `,
    data() {
        return {
            style: {
                container: {
                    width: '100%',
                    color: 'white',
                    backgroundColor: 'red'
                }
            }
        }
    },
    methods: {
        print() {
            console.log('print')
        }
    },
})