# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = %r{
    ^[A-Z0-9] # begins with a letter or number
    [A-Z0-9._%+-]{1,63}+ # local part limited to these chars, max length of 64
    @ # separator
    (?:[A-Z0-9-]{1,63}\.){1,8}+ # 1-8 optional subdomains
    [A-Z]{2,63}+ # domain ends with 2-63 letters
    $ # end of line, case insensitive
  }xi

  validates :username, :email, :first_name, :last_name,
            :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates :username, :email, uniqueness: {case_sensitive: false}
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_format_of :email, { with: VALID_EMAIL_REGEX }
  validates_confirmation_of :password, presence: true


  before_save :capitalize_username
  after_initialize :ensure_session_token
  attr_reader :password
  alias_attribute :likes, :likings

  has_many :likings, dependent: :destroy
  has_many :reviews, dependent: :destroy

  def self.find_by_credentials(username, password)
    user = User.where('LOWER(username) = ?', username.downcase).first
    return if user.nil?
    user.try(:is_password?, password) ? user : nil
  end

  def password=(unencrypted_password)
    if unencrypted_password.present?
      @password = unencrypted_password
      self.password_digest = BCrypt::Password.create(unencrypted_password)
    end
  end

  def is_password?(unencrypted_password)
    BCrypt::Password.new(self.password_digest).is_password?(unencrypted_password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def capitalize_username
    self.username.capitalize!
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
