#!/usr/bin/env ruby
require 'aws-sdk'
AWS.config access_key_id: '***REMOVED***', secret_access_key: '***REMOVED***'

s3 = AWS::S3.new
staging_bucket = 'test-dss.adlerplanetarium.org'
prod_bucket = 'destinationsolarsystem.adlerplanetarium.org'
use_bucket = staging_bucket
if ARGV[0] =='prod'
   use_bucket = prod_bucket   
end 
bucket = s3.buckets[use_bucket]
puts use_bucket

css = Dir.glob("css/*.css")
js    = Dir.glob("js/**/*.*")
img = Dir.glob("img/**/*.*")
tour = Dir.glob("tour/**/*.*")

to_upload = ["index.html"] + ["coming-soon.html"] + css + js + img + tour

total = to_upload.count

to_upload.each.with_index do |file, index|
  content_type = case File.extname(file)
  when '.html'
    'text/html'
  when '.js'
    'application/javascript'
  when '.css'
    'text/css'
  when '.gz'
    'application/x-gzip'
  when '.ico'
    'image/x-ico'
  else
    `file --mime-type -b #{ file }`.chomp
  end

  puts "#{ '%2d' % (index + 1) } / #{ '%2d' % total }: Uploading #{ file } as #{ content_type }"
  bucket.objects["#{file}"].write file: file, acl: :public_read, content_type: content_type
end


puts 'Done!'
