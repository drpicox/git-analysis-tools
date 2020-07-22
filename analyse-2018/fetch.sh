for a in athens berlin cardiff dublin; do
  (
  cd adventure-game-$a
  git fetch
  git checkout master
  git pull
  )
done
