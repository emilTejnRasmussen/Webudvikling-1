function marioPyramid(height) {
    for(let i = 0; i < height; i++){
        console.log("#".repeat(i+1))
    }
}

marioPyramid(5)
/*
Expected output:
#
##
###
####
#####
*/