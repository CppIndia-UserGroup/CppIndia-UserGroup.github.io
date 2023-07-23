1. **Install Docker on your system**\
   Make sure you have Docker installed on your machine. If you don't have it already, you can download and install it from the official Docker website for your operating system.

2. **Build Docker image**\
   Use the following command to build the Docker image for CppIndia website:

   ```bash
   docker build -t cppindia_website .
   ```

3. **Run Docker instance**\
   Start a Docker container from the built image using this command:

   ```bash
   docker run --name cppindia_website -p 4000:4000 -v $(pwd):/srv/jekyll cppindia_website
   ```

    This will run the Jekyll development server inside the container and map port 4000 from the container to port 4000 on your host machine, allowing you to access the website at http://127.0.0.1:4000/ in your browser.

4. **Make changes to the website**\
    Use any code editor to modify CppIndia website's source files. Any changes you make on your host machine will automatically trigger a website rebuild inside the running Docker container.

5. **Observe changes in the browser**\
    After making changes, refresh http://127.0.0.1:4000/ in your browser to see the updated version of your website. The rebuild process might take around 30 seconds to 1 minute to complete.