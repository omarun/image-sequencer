// hide on save
module.exports = function CropModuleUi(step, ui) {

    /* sets the pixel value under the mouse pointer
     * on the title attribute of the image element.
    */
    function setup() {
        var ndviImage = $(imgEl());

        ndviImage.mousemove(function ndviMousemove(e) {

            var canvas = document.createElement("canvas");
            canvas.width = ndviImage.width();
            canvas.height = ndviImage.height();
            canvas.getContext('2d').drawImage(this, 0, 0);

            var offset = $(this).offset();
            var xPos = e.pageX - offset.left;
            var yPos = e.pageY - offset.top;
            ndviImage[0].title = "NDVI: " + canvas.getContext('2d').getImageData(xPos, yPos, 1, 1).data[0];
        });
    }
    // step.imgSelector is not defined, imgElement is:
    function imgEl() {
        return step.imgElement;
    }

    return {
        setup: setup
    }
}
