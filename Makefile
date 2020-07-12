build:
	ng build --prod --outputPath docs
	echo "oktests.chrispyles.io" > docs/CNAME
