for s in g h s e; do
	convert background.png s$s.png -gravity center -composite -format png bg_$s.png
	for v in 7 8 9 t u o k a; do
		convert bg_$s.png v$v.png -gravity center -composite -format png raw_$s$v.png
		convert raw_$s$v.png -filter Gaussian -resize 25% -format png card_$s$v.png
	done
done