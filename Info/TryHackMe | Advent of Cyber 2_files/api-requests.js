async function getNewRooms(){return new Promise(async function(_0x258f5d,_0x5e10ca){$['getJSON']('/api/new-rooms',async function(_0x3c2d4b){return _0x258f5d(_0x3c2d4b);});});}async function getNoQuestionsAnswered(){return new Promise(async function(_0x4ed2ba,_0x237188){$['getJSON']('/api/questions-answered',async function(_0x2affa9){return _0x4ed2ba(_0x2affa9);});});}async function getRoomCosts(_0x4abc10){return new Promise(async function(_0x22877a,_0xcfd52b){$['getJSON']('/api/room/costs/'+_0x4abc10,async function(_0x1e7d11){return _0x22877a(_0x1e7d11);});});}function getRoomData(_0x2a58a7){return new Promise(async function(_0xd02337,_0x4d566b){$['getJSON']('/api/room-details?codes='+_0x2a58a7,async function(_0x44b687){return Array['isArray'](_0x2a58a7)?_0xd02337(_0x44b687):_0xd02337(_0x44b687[_0x2a58a7]);});});}function getRoomNetworkOwners(_0x53dab4){return new Promise(async function(_0x3d7594,_0x18b4dd){$['getJSON']('/api/room/network/'+_0x53dab4,async function(_0x223b73){return _0x3d7594(_0x223b73);});});}function getPublicRooms(){return new Promise(async function(_0x5dcc8a,_0x1fd8fb){$['getJSON']('/api/getstats',async function(_0x435c7d){return _0x5dcc8a(_0x435c7d['publicRooms']);});});}function getSeriesData(_0x4effe4){return new Promise(async function(_0x2aa4f9,_0x3c911f){$['getJSON']('/api/series?'+_0x4effe4,async function(_0xff791){return _0x2aa4f9(_0xff791);});});}async function getPathInfo(_0x10cad5){return new Promise(async function(_0x3ab79b,_0x182317){$['getJSON']('/get-path/'+_0x10cad5,async function(_0x3aa487){return _0x3ab79b(_0x3aa487);});});}async function getModules(){return new Promise(async function(_0x3d24ca,_0x5a2d79){$['getJSON']('/modules-summary',async function(_0x410453){return _0x3d24ca(_0x410453);});});}async function getModuleData(_0x3b7ffc){return new Promise(async function(_0x4cc9ef,_0x2c5f00){$['getJSON']('/module/data/'+_0x3b7ffc,async function(_0x7f2e13){return _0x4cc9ef(_0x7f2e13);});});}