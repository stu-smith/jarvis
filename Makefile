NWJS_DOWNLOAD=http://dl.nwjs.io/v0.12.3/nwjs-v0.12.3-linux-x64.tar.gz
NWJS_EXE=$(DIST)/nwjs-v0.12.3-linux-x64/nw

DIST=dist
NWJS_TARGZ=$(DIST)/nwjs.tar.gz


all: $(DIST)/nw display-server-js coordinator-js console-input-js

$(DIST)/nw:
	mkdir $(DIST)
	curl -o $(NWJS_TARGZ) $(NWJS_DOWNLOAD)
	tar xvzf $(NWJS_TARGZ) -C $(DIST)
	touch $(NWJS_EXE)
	rm -f $(DIST)/nw
	ln -s nwjs-v0.12.3-linux-x64/nw $(DIST)/nw
	rm -f $(NWJS_TARGZ)

display-server-js:
	cd display-server && npm install

coordinator-js:
	cd coordinator && npm install

console-input-js:
	cd console-input && npm install

clean:
	rm -fr dist/

demo: all
	bash launcher.sh
