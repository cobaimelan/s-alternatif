var salternatif =require('./lib/index.js')
var expect = require('expect.js');

var sa =salternatif();
describe('Search Test!!!...', function(){
	it('Search Test :1 ', function(done){
		sa.search({artist:"Emre Aydın"},function(err,data){
			expect(err).to.exist;
			expect(data).to.be.an('object');
			expect(data.lyrics).to.have.length(50);
			expect(data.lyrics[0].id).to.eql(21805);
			expect(data.lyrics[0].title).to.eql('Afili Yalnızlık');
			done();
			console.log(data);
		});
	});
	it('Show Test :1 ', function(done){
		sa.show(21805,function(err,data){
			expect(err).to.exist;
			expect(data).to.be.an('object');
			expect(data.title).to.eql('Emre Aydın - Afili Yalnızlık');
			expect(data.body).to.eql('\r\nÖlsem (ölsem), ölsem (ölsem), ölsem... hemen şimdi \r\nKaçsam (kaçsam), gitsem (gitsem), kaçsam... tam da şimdi \r\n\r\nBu kez pek bir afili yalnızlık \r\nAldatan bir kadın kadar düşman \r\nAğzı bozuk üstelik bırakmıyor acıtmadan \r\nBu kez pek bir afili yalnızlık \r\nAğlayan bir kadın kadar düşman \r\nTuzaklar kurmuş üstelik \r\nBırakmıyor acıtmadan \r\n\r\nBitiyorum her nefeste \r\nNe halim varsa gördüm \r\nÇok koştum, çok yoruldum \r\nVe şimdi ben de düştüm...\r\nx2\r\n\r\n\r\nSövdüm (sövdüm), sövdüm (sövdüm), sövdüm ben dünyaya \r\nAcılara, sokaklara, ait olmaya, insanlara \r \n\r\nBu kez pek bir afili yalnızlık \r\nAldatan bir kadın kadar düşman \r\nAğzı bozuk üstelik bırakmıyor acıtmadan \r\nBu kez pek bir afili yalnızlık \r\nAğlayan bir kadın kadar düşman \r\nTuzaklar kurmuş üstelik \r\nBırakmıyor acıtmadan \r\n\r\nBitiyorum her nefeste \r\nNe halim varsa gördüm \r\nÇok koştum, çok yoruldum \r\nVe şimdi ben de düştüm...\r\nx2\r\n\r\nDeğmezmiş hiç uğraşmaya\r\nBu kez mecalim yok hiç dayanmaya.. dayanmaya..\r\n\r\nBitiyorum her nefeste \r\nNe halim varsa gördüm \r\nÇok koştum, çok yoruldum \r\nVe şimdi ben de düştüm...\r\nx2 \r\n\n\r\n\r\n \r\n\r\n\r\n \r\n\r\n\r\n');
			done();
			console.log(data);
		});
	});
});


		