

for(i = 1; i <= 1000; i++){
    generator();
}

function generator(){
    const fs = require("fs");

    const dataObject = {
        name : "Test_cat #" +i,
        description: "It's just a test nft",
        // image : "ipfs://bafybeihkpv2c3bobo3lu5pziy5uy5getv4t7qhwpkjwrf4am27mecoda3q/" + i + ".png",
        image : "ipfs://bafybeibdnfbxj6p56eodlelzhz7gkscbje7q5kuvysnocydiwiqnjussqa/" + i + ".png",
        edition : i
    };
    
    const jsonString = JSON.stringify(dataObject);
    
    // Write JSON string to a file
    fs.writeFileSync( i +".json", jsonString, "utf-8");
    
    console.log("JSON file created!");
}

