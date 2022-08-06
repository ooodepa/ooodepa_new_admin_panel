docker build \
-t pavelinnokentevichgalanin/ooodepa_admin_panel \
--build-arg REACT_APP__USE_HASH_ROUTER=false \
--build-arg REACT_APP__URL_BACKEND_SERVER=https://192.168.100.6:5000 \
.
