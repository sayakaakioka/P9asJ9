#!/bin/sh

IFS=$'\n'
OUTDIR=../examples_html
for DIR in `/usr/bin/find ./ -type d -maxdepth 1 -mindepth 1`
do
  FILENAME=`/usr/bin/basename "${DIR}"`
  DIRNAME=`echo "${DIR}" | sed -e "s/^\.\/*//"`
  /bin/cat <<EOF > "${OUTDIR}/${FILENAME}".html
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <title>"${DIRNAME}"</title>
</head>

<body>
<h1>"${DIRNAME}"</h1>

EOF

  TARGETDIR="${OUTDIR}"/"${DIRNAME}"
  /bin/mkdir -p "${TARGETDIR}"
  for SRC in `/usr/bin/find ${DIRNAME} -type f -name '*.pde' -print`
  do
    /bin/cat <<EOF >> "${OUTDIR}/${FILENAME}".html
<h2>"${SRC}"</h2>
<script type="text/processing" id="${SRC}" debug="transpiled">
EOF
    /bin/cat "${SRC}" >> "${OUTDIR}/${FILENAME}".html
    /bin/cat <<EOF >> "${OUTDIR}/${FILENAME}".html
</script>

EOF
    FILENAME2=`echo "${SRC}" | sed -e "s/\//-/g"`
    /bin/cat <<EOF > "${TARGETDIR}/${FILENAME2}.html"
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <title>"${SRC}"</title>
</head>

<body>
<h1>"${SRC}"</h1>

<script type="text/processing" id="${SRC}" debug="transpiled">
EOF
    /bin/cat "${SRC}" >> "${TARGETDIR}/${FILENAME2}".html
    /bin/cat <<EOF >> "${TARGETDIR}/${FILENAME2}".html
</script>

<!-- P9asJ9.js should be placed in the last of the document -->
<script type="text/javascript" src="P9asJ9.js"></script>
</body>
</html>
EOF
  done

  /bin/cat <<EOF >> "${OUTDIR}/${FILENAME}".html
<!-- P9asJ9.js should be placed in the last of the document -->
<script type="text/javascript" src="P9asJ9.js"></script>
</body>
</html>
EOF
done
