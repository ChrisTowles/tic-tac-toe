while :
do
	node app.js > app.node.log 2>&1 
	echo "server crashed"
	sleep 1
done