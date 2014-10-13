module ErrorSerializer
  include ActiveSupport::Concern

  def attributes
    data = super
    data[:errors] = object.errors if object.invalid?
    data
  end
end

