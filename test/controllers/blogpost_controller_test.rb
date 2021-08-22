require "test_helper"

class BlogpostControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get blogpost_index_url
    assert_response :success
  end
end
