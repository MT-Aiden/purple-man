// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000105050505050505050505050505050206090c0c0c0c0c0c090909090f090907060c0c0e0c0c0e0e0909090909090907060c0c0e0d0d0c0e0909090909090907060c0e0e0d0c0909090909090f090907060e0e0d0c090f090909090909090907060c0c0c090909090909090909090907060c0c0909090909090f090909090a0706090909090909090909090909090a0706090909090f090909090909090a0a0706090909090909090f0909090a0a0a070609090909090909090a0a0a0a0a0a070609090909090909090a0a0a0a0a0a070609090f0909090a0a0a0a0a0a0a0a0706090909090909090a0b0b0a0a0a0a0703080808080808080808080808080804`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
