/**
 * Created by Yalovich on 19/08/2017.
 */


module.exports = (function App()
{
    /**
     * Return restaurant menu
     * @return Promise
     */
    function getBands()
    {
        return new Promise(function(resolve, reject) {

            resolve([{
                name: "Anderson .Paak",
                image: "http://www.okayplayer.com/wp-content/uploads/2016/06/25_AndersonPaak_02.jpg",
                birthday: "1986-02-08",
                video: "https://www.youtube.com/embed/ferZnZ0_rSM"
            }, {
                name: "George Clinton",
                image: "http://cps-static.rovicorp.com/3/JPG_400/MI0001/396/MI0001396667.jpg?partner=allrovi.com",
                birthday: "1941-07-22",
                video: "https://www.youtube.com/embed/IodGZAx7FRs"
            }, {
                name: "Kendrick Lamar",
                image: "http://gonetworth.net/wp-content/uploads/2015/07/kendrick-lamar-net-worth2.jpg",
                birthday: "1987-06-17",
                video: "https://www.youtube.com/embed/hRK7PVJFbS8"
            }]);

        });
    }

    return {
        getBands:getBands
    }
})();
