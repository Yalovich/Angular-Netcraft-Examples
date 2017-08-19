/**
 * Created by Yalovich on 19/08/2017.
 */


module.exports = (function App()
{
    /**
     * Return restaurant menu
     * @return Promise
     */
    function getMenu()
    {
        return new Promise(function(resolve, reject) {

            resolve([
                {
                    name: "gyros",
                    price: 4.5
                },
                {
                    name: "souvlaki",
                    price: 4,
                    picture: "http://www.roughguides.com/wp-content/uploads/2016/03/Dolmades-660x478.jpg"
                },
                {
                    name: "greek salad",
                    price: 5
                },
                {
                    name: "moussaka",
                    price: 4.5,
                    picture: "http://www.roughguides.com/wp-content/uploads/2016/03/Moussaka-660x455.jpg"
                },
                {
                    name: "spanakopita",
                    price: 3.75,
                    picture: "http://www.roughguides.com/wp-content/uploads/2016/03/Spanakopita-660x473.jpg"
                },
                {
                    name: "tzatziki",
                    price: 2,
                    picture: "https://fthmb.tqn.com/QI4Rhd0_eP5qTTjLnL-WateF-pU=/960x0/filters:no_upscale()/about/Tzatziki-GettyImages-135579641-58d3e1d63df78c51626fba06.jpg"
                }
            ]);

        });
    }

    return {
        getMenu:getMenu
    }
})();
