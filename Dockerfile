# Use the official Jekyll image as the base image
FROM jekyll/jekyll:latest

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Install Jekyll and other dependencies
RUN gem install jekyll
RUN gem install bundler -v 2.2.19

# Install the bundle
COPY Gemfile Gemfile.lock ./

RUN bundle install

# Expose port 4000 (Jekyll's default server port)
EXPOSE 4000

# Start the Jekyll server when the container runs
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
