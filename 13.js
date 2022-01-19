//13 몇 번째 행성인가요?
//나의 정답
function findPlanet(name){
    let planetList = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
    console.log(planetList[name-1]);
}

findPlanet(1);