<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use App\User;

class ChangePasswordController extends Controller
{
    public function changePassword(ChangePasswordRequest $request)
    {
        $tokenRow = $this->getPasswordResetRow($request->resetToken);
        return $tokenRow ? $this->chanagePassword($tokenRow, $request) : $this->tokenNotFound();
    }
    
    private function getPasswordResetRow($token)
    {
        return DB::table('password_resets')->where('token', $token)->first();
    }

    private function tokenNotFound()
    {
        return response()->json(["error" => 'Token or Email is incorrect'], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function chanagePassword($tokenRow, $request)
    {
        $user = User::whereEmail($tokenRow->email)->first();
        $user->update(['password'=> $request->password]);
        DB::table('password_resets')->where('token', $tokenRow->token)->delete();
        return response()->json(['data'=> 'Password Successfully Changed'], Response::HTTP_CREATED);
    }
}
