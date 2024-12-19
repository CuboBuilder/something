function Planet(planetName) {
    Planets[planetName].accessible = Planets[planetName].alwaysUnlocked = true;
}

Planet("tantros");
Planet("gier");
Planet("notva");
Vars.content.getBy(ContentType.block).each(block => {block.breakable = true; Blocks.air.breakable=false})
Vars.content.getBy(ContentType.block).each(block => {block.placeableOn= true}); Blocks.deepwater.drownTime=0; Blocks.slag.drownTime=0; Blocks.arkyciteFloor.drownTime=0; Blocks.cryofluid.drownTime=0; Blocks.tar.drownTime=0;
Vars.content.units().each(u=>u.hidden=false);
Vars.content.items().each(u=>u.hidden=false);