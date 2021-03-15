# Automatically clear projects

.PHONY: clean

clean:
	@find . -maxdepth 2 -iname "node_modules" -type d -exec rm -rf {} \;
	@find . -maxdepth 2 -iname "package-lock.json" -type f -exec rm -rf {} \;
	@echo "Clean projects"