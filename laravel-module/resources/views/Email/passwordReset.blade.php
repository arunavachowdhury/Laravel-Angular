@component('mail::message')
# Change Password Request

Click on the button below to change the password

@component('mail::button', ['url' => 'http://localhost:4200/request-password-response?
token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
