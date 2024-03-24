echo "Enter commit message: "
read c

full_path=$(realpath $0)
BASEDIR=$(dirname $full_path)
echo $BASEDIR

# Submodules

# PUSH
git add .
git commit -m "${c}"
git push

# PULL
cd "${BASEDIR}/../common-components/"
npm update native-ui --latest

cd "${BASEDIR}/../client/"
npm update native-ui --latest