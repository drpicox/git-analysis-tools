run() {
	R=$REPO
  REPO=$PWD/adventure-game-$REPO node /Users/drodenas/Projects/drpicox/git-analyzer/$CSV.js | while read a; do
  	echo $R,$a
  done
}

#mv -f increments.csv increments.old.csv
#mv -f survive.csv survive.old.csv
#for REPO in athens berlin cardiff dublin; do
for REPO in cardiff; do
  #CSV=increments REPO=$REPO run >> increments.csv
  CSV=survive REPO=$REPO run # >> survive.csv
  # exit 0
done
