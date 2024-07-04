VALID_PASSWORD="IMHUNGRY"
echo "Enter the password:"
read entered_password
if [ "$entered_password" == "$VALID_PASSWORD" ]; then
	echo "You have Access"
else
	echo "Access Denied"
fi
