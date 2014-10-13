class UserSerializer < ActiveModel::Serializer
  include ErrorSerializer
  attributes :id, :email
end

