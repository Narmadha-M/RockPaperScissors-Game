let score={win:0,loss:0,tie:0};
		function resetScore(){
			score.win=0;
			score.loss=0;
			score.tie=0;
			document.querySelector('.js-score-view').innerHTML='Win : 0 Loss : 0 Tie : 0';
			document.querySelector('.js-result-view').innerHTML='';
		}
		function findWinner(userChoice){
			let computerChoice=Math.random();
			let result=null;
			if(computerChoice<=1/3){
				computerChoice='rock';
			}
			else if(computerChoice>1/3 && computerChoice<=2/3){
				computerChoice='paper';
			}
			else{
				computerChoice='scissors';
			}
			if(userChoice===computerChoice){
				score.tie++;
				result='Tie';
			}
			else{
				if(userChoice==='rock'){
					if(computerChoice==='paper'){
						score.loss++;
						result='You Lost';
					}
					else{
						score.win++;
						result='You Won';
					}
				}
				else if(userChoice==='paper'){
					if(computerChoice==='scissors'){
						score.loss++;
						result='You Lost';
					}
					else{
						score.win++;
						result='You Won';
					}
				}
				else{
					if(computerChoice==='rock'){
						score.loss++;
						result='You Lost';
					}
					else{
						score.win++;
						result='You Won';
					}
				}
			}
			document.querySelector('.js-score-view').innerHTML=`Win : ${score.win} Loss : ${score.loss} Tie : ${score.tie}`;
			document.querySelector('.js-result-view').innerHTML=`You <img src="${userChoice}.jpg" class="js-result-images"> <img src="${computerChoice}.jpg" class="js-result-images"> Computer<br>Result : ${result}`;
			
		}