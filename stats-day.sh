#!/bin/bash

MAX_DAYS=$((20*7))
BRANCH=develop

function count {
	if test -n "$CI"; then
		LINES=0
		COUNT=0

		for file in $(find src -name \*.php 2> /dev/null); do
			FILE_LINES=$(cat $file | wc -l)
			let COUNT=COUNT+1
			let LINES=LINES+FILE_LINES
		done

		if test $COUNT -gt 0; then
			echo -e "$TS\\t$((LINES/COUNT))\\t$COUNT\\t$LINES\\t$DAY\\t$CI"
		fi
	fi
}

function checkout {
		TS=$(date -v -${DAY}d "+%Y-%m-%d")
		CI=$(git rev-list -n 1 --before="$TS" $BRANCH)

		if test -n "$CI"; then
			git checkout $CI >& /dev/null
		fi
}

function countMany {
	let DAY=MAX_DAYS
	while test $DAY -ge 0; do
		checkout
		count
		let DAY=DAY-1
	done
}

countMany

git checkout `git rev-list -n 1 --before="2014-10-14 18:37" develop`
