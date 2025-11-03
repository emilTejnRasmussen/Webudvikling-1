function realMarioPyramid(height) {
    // your code here
    for (let i = 0; i < height; i++) {
        let spaces = " ".repeat(height - (i+1))
        console.log(spaces + "#".repeat(i+1))
    }
}

realMarioPyramid(5)
/*
Expected output:
    #
   ##
  ###
 ####
#####
*/