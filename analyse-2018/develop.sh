for a in athens berlin cardiff dublin; do
  (
  cd adventure-game-$a
  git checkout -b develop
  git push -u origin develop
  )
done
