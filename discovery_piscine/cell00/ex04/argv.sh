#!/bin/bash
if [ $# -lt 1 ]
then
	echo "No arguments supplied"
fi
count=0 
for i in $*
do
	echo "$i"
	((count+=1))
	if [ $count == 3 ]
	then
		break
	fi
done
		
	
	
	
