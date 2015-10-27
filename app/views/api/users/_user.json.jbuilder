#  username        :string           not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
json.extract!(
  user,
  :id,
  :username,
  :email,
  :first_name,
  :last_name,
  :created_at,
  :updated_at
)

json.type "User"
json.likes user.likes
