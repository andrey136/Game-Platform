import React, { Component } from 'react';
import './App.css';

class Fruits extends Component {
  linksOfPhotos(index){
    let arr = this.props.fruits.map(el => !el ? el = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMVFRUXFx4YFhgYGRgYHxoaFhoYFxgYGBcgHSggGBolHRsYITEhJSstLi4uFx8zODMuNygtLisBCgoKDg0OGxAQGy0mHyUtLTIrLS01LS0tLSstLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPYAzQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBgECBwj/xABHEAACAQMCAwYDBQYDBQYHAAABAgMABBESIQUxQQYTIlFhgQdxkTJCUqGxFCNicoLBFZLRM1OywvAkNGPS4fEXQ1Rzg5Oj/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgICAQQDAAAAAAAAAAECEQMhEjEEQSJRYTJxodFCgZH/2gAMAwEAAhEDEQA/AO40UUUAUUUGgNXcAZOwG5JqG412rtLUIZ5dOsal0q8hKjGXwisQgyPEdtxUNxyKfRxAS5MLyQd2CcjumWGOcDyBw+R6560txqIx8UtZz9iaGS1z5OCJ4/8AMFkHzAoQ3SsmOJXkkltrsTHI7he6ZjlMOwBkyD4gqktgc8Y60w4jx6Yzm1s40kljCmeSUlY4tYyqkLlnkI8WkYABBJGRTC3nXh1xobw2dy/gPJYLhjuh/DHKcsDyDhh94Y37GjULuU/akvZyflE/7Oo/yxCrJbopKfxtDW24480lhcae7c3MtlcxgkjKpLnfbIEkSlSRnDnlk1ehVJ7JcMWVpZScLFxK5lUY5uA0GSfIapDjzx5b3cVUugooooSFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAIXtossbxuMo6lWHowwaacd4ULmFomJUnDI4xlJEIaORfVWAPtipHNQvbLtCthavcspcrhUQba3c6UXPQZO56AHnyoCI4fdreRy2V7GonVdNxDyDKdhLF1MbbEMN1OxwRWlnc2fCrURS3S4RpDmR11uzO8pBGcs/ixt+Wa5D2m4xe3bxzXUojIYJGkA0aFlIVgZftnI5jOMio+64XBFDIVjXIRtz4jyPU1qkzBxR2L4b9r+Htbw24uov2h8ySISR+9nZpXRSRhiGcjYnlXQa8yX9vE8Zj0jGPDgY0kcip6YrtPwk4tNc8LgknbU+WTUebCNioLHqdufXFUkqNYysuVFFFVLBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBWk0oVSzEAAEknkANyT6VsarEiS39rfwN+7DvNbxNj7oUR6j5jXr9qAd/4j3s1p3UhWKSOSbGnBkCd2qL4hlV/e69sHwr0yCz+I/Zl+IWZgjdUkDrIhbOklM7NjfBzz3qVveDJKsIJKNCyvGybFWUacDzUqSpB2IJqTxQHnHifZHiizLbMkDPp74ukhKxpGwOuTO6g4wNsnBxyNLcR7IcTU92IoJi0BmUJKx1oCFYICqknxLt/EK7dP2Zh7maGPVF+0HMzqSXfJ8eZGJbJXK5zsDtipFeHxB0kCDWiGND1VG0kqPTwr9KnkyOKOBdk+xN3eKivcLb5QOP3TOWjyAGjlz3bnGMgHIJ3Aru/AOER2lvFbxA6Il0jPM9Sx9Sck/OleH8PjhDLGNKs7SEdA0h1NgdAWyceZNO6iwlQUUUUJCmXFOJJAIy+cPKsQPQNIdK58gWwPmwp7Ub2i4Z+020sGrR3i6Q2MlTnIdRkeJTuDnYgUBJCisKNqzQBRRRQBRRRQBRRRQBRRRQBRRRQBWGrNFARHZp5zExuAQ/fzgA7fuxPIIvbuwuD1GDUvRRQBRRRQBRRRQBRRRQDeXvO8TGnu8NrznVnw6NPTH2s59KcVCcRu2F9aRAkBo53YZ2ITulGR13epugCsE1mo/jsaNCUkd0V3RNSEhsvIiqARyyxAz60BICisCs0AUUUUAUUz4jfrF3erJMkixqBzJf+wALH0U1WeJ9rZIp5T3am0t3jiuH8WtWlCsZFHLu4w8errhmORpwQLlRUHwSS4W4uYpdTxKUkgkYDdZVbVHkABijqfUB1qbJoDNFYDZ5VmgCiiigCiiigCiiigCiiigCiiigCiiigKvxV9XFLNEB1xxyvKxHh7mQBNIJ+0xkVDtnAU5+0KtFRPFeE95PbTq2l4HbJ/FHIhV4/kW7tvmgqWoAqp9sbstc2FmuczXAmf0js8T/nIIx9atlQl0sZ4hBkDvFt5iD/AAs9uDQE0KzRRQCNndJKgdDlTnBwRyJB5+oNLU24fZJCgjjGEGdIyTjJzgZ5DyHSnNAJT26sVLAEo2pfQ4K5HsxHvVPtLVGuuKWkgyJikuD1jngWA/RonH0qf7U8fisbZ7mYnSmAAoyzMxwqqPMmuOydvb9r2O8a0iCLG8ZhWQh2R8NhpCNJZWUEeEdR1zVolJ7R0TgnaURcOtzLqlud7YRL9uWeAtEwA6DKlix2A3O1I3nB0aN7ni8glCqXaMk/s8KjfSsfKVh+NwSTyA2FU7h/xCsI5pLo2F4skhOWAWQKRgMqDWBGGZctgDJ3OcDFs7KSx8VCXck0bxowaO1Q5ETjdWuCQDJKOYGAqncatmppEPlLSHfY6MWtvGO5WGS8uGkWBVC92rDVgqNlKQoM9Ne3MirkrA8jmoybg4Z5JdTiV07tX2zEhwSsQxhckBiTkkgZyFAD2xtEiRY0GFUYA58upPUnmSeZNVNBxRRRQBRRRQBRRQaAKKRW5UuyBgXUAsvUB9QUnyzpb6GlqAKKKKAKKKwaAqHxA7dx8MNt3iaxNJpbBwVjXGtwMeIgldutW5HyMggg8iPXyrzv8R5f8T4vNEGPc2sfdBhv4/vHH85IPmI6t3wg7Zzaxwq9H72NP3En40QfYPnhQSD1CkHcb15K69luLq/R1yq12q4bNrhvLUap7fUDGdu+hkx3kQP3X8Ksp/EoB2Jqy1A9obyYPDbwukLz6wJWXXjuwGKouQDIV1EZ2wjHBxirFSU4ZfJPEk0ZykihlyCDg9CDuCORB5EU6pnwjh6wQpChYhBjUxyzHmWY9WJJJ9TTw0AUVH8K4os5m0qy91M0J1feKBckem+PapCgKj8Tuzkt9ZGKAjvUkWWMNsGKZ8JPTIJ98Vxk3WlzFMjwzL9qOQFWHqPxL5MNjXpMmucdrex1zxGRBdd33fenR3eB3ES/eMn25JnGwUYRTudWkZtGTRWUbOY2Ei6M5G7MR8ixI+oINadjbuRL60/Yi3fd5olRRkNCHKv3vQAKM5PLbyFW+D4WpJPNHi4iiBdI27xiIzGUeMlSdUkciPjKnYxsNidrzw2NLCLuLWwJn0rqEKMsbuRza5kAyB1JJYDoTtUuVhRotiTqWZQQSuNQ8tW4zStV/glsbO3klupFaVyZriTkurAGlM8kVVVFzvhR1NTkEmpQ2CMgHB5jIzg+tULClFFFAFFFFAFYNZoNAVPgkpj4nfRSbGbupoCeTokSxSBfVHXJA5d4p61bKqjg3t4uABb2UpOvrLcBSpVD0jjDnURzY4+6c2ugCisGqn20+INnw7wSMZJyMrBHu5zy1dEB9dz0BoC2E1U/iB2xisYGCsGunXTBEN2Z22DFeig75PliuZ8V7X8Tu1Ly3A4fCeUcWA+OmqU+IN6LjnyqLsuCmEieOJ59Y8UhOZd/vaW5gg9N9uvTKWaK6No4ZPszwPhzW0Bdw8kjHXKVUuSx3xtucZ/Mmk+0HeQmO+tzia2OoZGcodmBHUYJyPItVmhEiDIGx3wQfzXmDTC6l7xyrR5Vl8R20nO2nGck49K4Y5Hz5ezteNcePo7H2U4wLu0guQAO9jDEA5Abkwz6EEe1b9ouGG4gZFbRICHhf8EqHVG3qMgAjqCR1rn3wIvSsd5YknFtNqjz0SXOAPdSf666pXpJ2eY1WjWPOBnnjf51k1mipBV+DW5/xG8kSORIykSOWGFkmUMS8Y64QxqW6kY+7vaKxis0AUUUUAUUUUBFXfZ6CWZZ5VMjpjQHZiiEcmWLOgP/ABYzW89zOZ1jSId0F1SSs3sI40G7N1JOABjGokgSVI3SuVbuyofB0lgSAehIBBI9MigFqKQsYWSNFdzIyqAzkAFiBgsQBgE88DzpegCiiigMZoNRM2o3sY3VEicjnh2dkGB08IXJz/vBjkcS9AVnsawRry2/3N27Z8xchbofQysv9I86s1JRWyKzMqgM5BcgbsQAoJ89gB7UoxxQFA+KHxBHD1EMI13Ui5XO6xKTp72T3zgdcHPrz2y4cqMZGJkmc5klbdmJ5nPQegpmt7/iF9e3bYaJz3MYPWNcAe2kA/NjTzh8UiDu3OpV+w+dyOgcfiHLI54ri8id/FPo7fHx18muyXjsIZoykiBweYPTyI6j5j1p1NKYk2R5Ao28QJOOQLMdz6k1GxyFTkHBp/DxEfeGPUVzJ6o6mvYytePGTP7p4yOYkUj6EeE+xrWRsnOw+VOL0IfEhGeo/vTRiACTsBuTUMLROfCSEDiF8y/7qHX/ADEvj8hXWq4B2C+IUNmtw37JczSzy6yyKNOhRpiUHOdhk8vvGpfinxgvjgW3De7LNpVpmLZO5xoGjGwP3q9SFRik2eXO5SbSO0VEcV7UWVttPdQxnyZ1z/lzmuCcQ4vxe7dFvbp4YnYqI4SE3Cs2PDzBwftE/Kll4PbwIzLCrMN/F4mYnl4mzjJx6VSeeMddl44JP8HWV+KnBydP7amf5JQP82jFWHhPH7W5Gbe4il/kdWI+YByK4stuuBlUzjfCjGeuPSq9xbs8C5lt0kilByGSRUGfPqR7YqkPJi3T0Xl40krTPTYNZrivYX4k3VvIltxf7DeGO5ONj0WVhsR/FsR1yNx2S2uUkUMjq6n7ykMPqK6E0+jnaa7FqKKDUkGiyKSQCCRzHlncZ8tq3qqcGuUm4lcSwNriWCOKR13QypJIdKtyLKpIbHLUo6Va6AKKKKAKKKKAxis0UUAVUfivxn9l4XcyA4d07pMHB1S+DIPQgFm/pqy3t9FCpeWRI1HNnYKPqa4r8Xe1tpfSWdnbTLMon1ylcldvCoDYw2Qz8s1DdKwtuiJ7M2vd2sS4wSuo/N/F/f8AKrBw6IyR/vFQMDjMZO4wMEgjY+m/zqKvYCy+F2RhupX9Ch2Yeh/KtuGXblcnKsNj4XUH1AYcvqPWvLk7uR6sVVRH11alOuQeVIUrNcM2zHlSVZlzBONzURxCcXCNHEx0EESSj7IUbsFJ2cnltkAE5NSk8CuMOoYeR3HuOvvTG9RpT3Krpi/+a2MZH+7TzzyJ5AZHPlpCrszndEL2Q4uUVbafKNgGIttqVtwP9Pp0qwX2ltAJ3V1fb+E53/SteK8PimjIkUHAOk9V25g9OlRNlw+cxRvDMMNGraZhqwWAJw4wcfOrvjN8uiiuK49khxyYd1qU+JGVx/SwJ/LI96b3F8wOhMu/PGdlHQueg/M+VD9nrqUYkmCqeYjjOSPLUx2pa17NwRggqzk7t3jE5PmV5H6VK4RW2T829Ic8MaQqTI6sc/dGMY6czmn/AHTYzg486awRwwDIWNFzvsEB8snaplOJJjkeXTGP/asXt2aIgpBDOrRnTIAcMvkR59Qaa8NtJrBzPw+VkIGWgYlo5AOakE88ZweYPUVMzOGJIAFJ1aOSUP0lZY4y/UdP+H/bGPidv3yIY2RtEiE50sADseqnOxwOR8qsxrgfw44p+xcaeA7RXijbyfxFD/m1r/WK74K9SLtWeZJcXRF9nOFtbxGMvrHeyup32WWV5FX2DY9qlaKKkgKKKKAKKKiO1PaCGxtnuZ2wqDYDm7H7KKOrE/3PSgJbNR/aDjEVpby3Epwka6j6nkqj+InAHqa4td9vONXuHgMdjF0GNbN6kspOPYe9RXFLTiN6FS+vmljU5CIoG/mQFAz6kHFZyzQj2zSOGb6RH96/FZjc30+osT3UAcAKmcABc5Vem25xknenHaGzjgti8MaqY3RxgDmrrzPM08j4KBpRjG8Y+60SZH8rLjB9qz2iiH7HMo5CPqSfs46nc8utcksvKa2daxcYPQpYcZil0qCVZhkKwKk7Z8ORhvapGojhFsjwx6gG8CkA79Bg/P1FS4rCaSdI2g3WxvbGSVyI9Kxo2lnbJ1MPtKigjlyLE8+hrN6rxOP3iuGO0ZGHxndgwOCq53yB8+VJw2RTISWVVJLaQVxliWOCVJGSTyPWlYLZUzgbn7TElmbHLUxJLe9G1eiqU72K0vZIC4B/62pCs1Q1F+0I1xtGhAYqRn8OoY/9celHCY1UhRgKq4HoFwB+VMpLdSyuRuudPkNWxOPPG2fU+dLVZvVEVuyUHEF1Y6edacTIKqRg77H0qOrQyAMF6kEj2Kg/qKgkZ3cMneK6LE4CFQJCcKzH7YAHi22xt896WjxFGoZi2kBc4JLHkMAZJJPIb05pOeLUOZUgggjGQQcg7jH/AEatyukyvGra7MW86uupc43G4IIIJBBB3BBBGDW0MQUYXlkn5ZJOB5DfYdOVa20ARcDfcsSeZZmLMT8ySfekZ59MsY6MGHvsR+hqKt0h62V7tbcCG7sp840SBifSN0b+5rvvCu3nDLjHdXkJJ5Kzd23y0vg5rgvaJVlubRWAKl2BB3BACk7U64h2Ut5BhEWM9WAJOP4RnA+hrsx5lCCUjkyYXObaPSSuCMjka2rzdwXi9xwWeJklkks2bTNG24UE7so5K25IIxkjBrsnAPiPw28lWGGf96wyqOjoWx+EsMMfQHPOumMlJWjmlFxdMttFFFWKmCa4L2t4t/it8WyTZWrFIh0lkH25D5joPQDzNdA+LnH2t7RbeJsT3bdyhHNVP+1fz2U49Cwrn9lbLEixoMKowPbr8871z+Rl4ql2zo8fHydvpExbWaganx8jyFJ3XEwhCxxl88yCqqv9z8gOnOmbuTzJPzNLW8CkZZwPTIzXAmd7Gt/NI26KhP8AESo+oBqB4xc3JhlRrUnUjANG4fmMbqVB+lWK8aNMkN4RzLYAHvUf/i8PQsR5iOQj/MFxVoN/VlJq/dEH2ZudUKryaPwMDsRjln2/Q1ZTMoGSw2G5zVe4ywiuY7g5Ecid27YwAwOpS3lnlk+VEnGrYc5U9jn9M1pKHLa9lIzUVT9E3bXiTBu7fIGxZSDgny6Z60rBEsaBQTgdWJJJO5JJ5moa047B9lJI9ztvjc/PFO3cnnVHBrRpGSex7HPqbA5frW0kwBA9d/SoueIOpU5weeCRkeWR0pQGo4k2yVqLm4hLoMqRr3KuE1MxBclxGSigcgxO5O+KkWkAGTyqGt43AjR3DRRHKIFxkg5UucnURz6DO+KmCXbKzcv8ScphdygTwjz1r9V1f8lKteDHL61FXjEywnrrJ+iN/rUQjvZM3on6KRe4AAPn0pj/AIi3equAV0MzH1yoT/mqqi2WboczSsJBuAuPFtk8jjHlUfxJ9UkR/wDE2/8A1yUvI+SSahrjjUHeKA2srk+AFtyNIAxz2LVtCLvRnOS9jfjN6I7u2OC2nJ0qMk6/CMDqdqsSPdPviKEeTapG98FQPlvUBYXSi4e4khnOwWLETHC43b5n+5q2cJ4jDLkjJxzUgqR81ODj8qnJaS10Ux7b2PIrKQqCdJyPr8hmmHEbESLpbKsDlGGzIw+yynmCDvtU1Dbr4jE7Ak5wSSBsBgKfsjbpTCUnJ1c+tYW07RtSapl9+Ffa5r61Kzn/ALTbt3U/LxEcpMD8WDn1B9Ku1eYxZXUF401rcNDM4Lo22lsfajcYwcbHcEEdMjNdl+H3bg3kbpcoIbmAqJVGdJ1glXQ77HSds7Yr1ITUlo8ycHF7Kl8ZnP8AifDhzASU4+exP0APtUdTn4t3QbjNlGu5jhZm9A+vn7D8xTFI20kFiclsHYEA8h7efpXH5X6l+x1+L+lilaQTK41Kcg8j59MjzHr1raNMADc4GMk5JxtueppK9Dd24T7Wk6fnjbFcyo6RvPxiBGKs+454V2C/zMAQvvUtaRIw1M4A5jBG/r8qYi8YRiK3iaMYxqcKAvqFBJdvoPWt7eEIiov2VUKPkowP0q0qRSLk3sWFvryuMg8wd9vWkv8AALdGCxxR6uuEUY/KpOKQRpnmzb4/T2/1pG2uwuondjUJ0XaTI3iXB4mBjkjRhjoMYz1BxkH5VWYVnglNuim4UDUpBwyA5wrk+H5b8vpVvdiTk8zTLhQBQv1kZmJ9yF+ihR7VeM2k72Zygm1WiCPE5Vfu3tZQxGVCFXyM4ySDgD1rdYb9zlY4oV/8Qlj8/Dt7VY7KyXvi5P2lC/JU1Nj3JNTN1NHpwSD6Dp/pVnkXpBQftlMaxvAP9rC5HJSjKPZgdvpTOS/uI/8AbWr4/FHiQfPHT3q/RWcZGRv71rc2iBSRtgedVU/tIlwfps51JxuN3RVWRtOWZQjFtQ2VcY9Sf6RSjzXTSK6WjlQpADMqHLEZJB9AB7mp618NzMPxJG/z+0h/QVaBFGFGwwcc+ua0eRLpFFBvtnP++vf/AKP/APslbrPd9bM+0sZq8WYjOvwEaXKnWPLByueakEEGk4ocpmZUVgW+xyIBOkj5jG1V5/hfz/ZZQ/L/AI/ooTW8lxOsU4aGLGQmRmU+WobHHUDfr12ttlwcd2VhKw9AVUH6jr70ld2ySKUcZB9seRB6EeYpPg880TGNzrAGUc/eXlh/4xtv1yD51DnyWvXoKHF7/wCkjFFoYCXfbcjr648q1uVUHwnI6enpW95c68bYx/em1ZM1NY0ILEsTk5AOPDsBgenX3rekop1ZmUZyuMgjHPkR5g+fofKkRORMY25MupD6rgOv6MP5j5VNNkWja7aMGNnYLh/Dk4yzKy498mpXsYwS6uz+KOA/Tvx/ao27t1kRkbkwIOOe4xketRd5xj9mnbf7cSDn+Bpf/NXR4zXJHP5K+LEuEcQN7eXd85JMjlY8/djGNK+y6B7HzqbiQjOWLZJO+Ns9BgDYVX4rI2F9dWbjTpkLxfxRt9kg9fDp+h8qlUuTqyeXX5VGeLc2Tga4Ieu2P0+tbVE8NuC6xMxJ1APv01+LA9BnA+VS1YSVaN07CtS4yBnc8h8v+h9azUdanVcyn8CKo9NRJb9F+lErDdDyJnLPq2GQF9QBu3uTj5AUtRRUEmrtgfp86R4fAY4kQ81UA/MDem3EWY5CnDAeE+TY2J98U+izgasZwM488b1ZqkV9m1J3Fwka6nZVUdWOBW6NkZFMbsxrPFLMpMaK+DpLBZCU0sVAJ5BgD0PzqIq3Qm6VoWtOKxs+lHYMRkAq6agOq5A1D5Zp68zHmxNR9zdi5kiMauI4mLl3UpqJVkCqp3I3JJwBsOfR7UyVEQbatiXcDXr+9p0+xIP9vzrWK8Z3kQjaMqo9QUVuXvil6Ki/stQ4a8YoVO/rTagNn9PpSc86oAWOMsFHzY4AqCRWtHfBA863ppfHl9aIhm1pepIXC5yjaWyMbjy8xz39Kc0nEwI1dSN/bP8AqfrSlHV6CsZcSyo71RlkySPxIftj8tQ9VA6mlJEWQI4P2SHQj5EfQgke9ODVe4Tdd2ksTHaMnSfJGGpfYDI/pq8Va/KKvT/cn4pNQBrnnxAkzcgD7sYB+ZLH+9XSGYrypj2S7NjidxeNgsIjGox694D/AMNb+ND52YeTL4UdZ+KnYUX8Ilh8N3CMxNy1DmY2P6HofQmuQ8Hv+9UhxplQ6ZEOxDDY7dNwfzFemq4P8Y+FCz4jDeoNMVyCk2Acd4uMk9AWBU466GO+9dWWCkjmxT4sibWMIqqOSgAfIbD8qmM1DSTqF1kjTzz0x558utSFtOMYPSvOmn2ehH6HJNR1hHiWVs/bIx/SAP8AWk7+8wC5zgcgOZJIAA9ScD3rS3mYOyuhR0IypIOxGQQRsQR/eii+LIclySJis0ysbLv2mfvZU0v3aaGwMKqEnQQVJ1FulFnd+Fg58cbGN/Vl648mBDf1elQ4krIm6EZz4j86fu2Fz6VD3txoRnxnSM486dSTEgDoKlxdJhP0O7T7P1pem1idiPWnNUfZZGsjYBPkCfoKYxzsWtxnZoyzeuFTH5nNPZh4W+R/SmfBcNbwMRv3SjPl4Vz+lWXVkPbof1is0VQsNbeTxsvqfrStzMqKWbkN/P5YHU5xj1qJSfTcuvmBJ+ehvyC084s2DC5BKLMrPgE+EBsNgcwGKn2z0rTj8kZuWmxSPhVy57xpzCCPDEER8fzseZPUDlyz1pjFcs4y2NSlkbGwyjFCQPIkZ96k7ntLHusCtK/IeFlQHzZ2AGP5cmouCPSNzkklmOMZZiWYgdBknarK6+S/YpHb7HtlJvj6U4nm0j1qJus6HwcHScH1wa2tneYosenLR69TA4VQBjYb7k/r8qjhey7nRJ9+CpIqBuYPG7dGhKn+k7f8Z+lOoi2XV9OpG0koSVJwDsSAds4rS/k0xSN5Ix/I1aK4uiJNSVkbd8T7q1jPOR41CAcyxUb49P8ASu0fB3ss9hYDvVxNO3eyA81BGEQ+oG5HQsar3wS7GQG2i4hOpknbIi17iNI2KKUXlk6c6vXbnv1zFd8IKJwZMjmZpjxjhcVzC8E6B43GGU/kQehB3B6Gn1FXMzzP2j4BLwqZra4y9nLkQzHlg/dY9GGdx7jateFXQZdBcMyjmCDqXkrj9COhr0hxHh8U6GKaNJI25q6hgfY1TLr4Q8JIJjheB98PFLKCpPUBmZR9KyniUjWGZxOWXUOpcZwQQwPPDKQynHUZArKK5ZpJG1O5GSBpACjAVRk4A+fU0p2r7OXvC5C8pa5s2OBKF3TPIOByPryPQ52qMHaC2xnvR9G/0rmljnHR0xyQlskuG3725lXumkV31oVKjBIAZW1EYGRkEZ50nCGLSSPpDyNqYLnAwqqACdzsNz5k1pbX0UgykisPn+o5ilTMv4l+oqn+i6jG7TNyKSgm1av4WK/QA/3pUelMlGiY/hl3H86jBHuoB/pNQlZZskbeXSf1qQVgdxUJayklweauV/IMPyNOAxHI4qsollId3km2n60z4ZIUTSRyLAfIMdP5YPvWaCKVqg+7F47kgEH2rMd1gYPPpTamUU2qdgGyqxjIHLUzMDn1Gj9acbDlVGD/AN5H/wBk593H/rUqbk6cfnTJYf3hfzUKPYsT+opapdaIjqzNYopvNfxJ9qRB82H6ZpTYbSNeKviGQjnpIHzOw/M0olvpCgM6FV0+BiuRgbEjpsDUNxbj0GFAfV41LaQeSnV125gfWpbh9jxW63tbBwp5PL4Bg9QWKg+2a2WObWjGWSF7F44wowowB0prw/h0vErtbGBsRgarmQb6UBGQD58hjzPkDVm4f8JuJT/97u44EPNIRrbHUZ2A+p966h2P7HWnDojHbIQWx3kjbu5HLUfIb4AAAyfM1rjw07Zjkz8lUSY4dZJDEkUQ0pGgRB5KowKc0UV0HOFFFFAFFFFAasuRg7g8xTReEW45QRD/APGn+lFFAQPFfhxwq4bXLZx6s5JTVFk/xBCNXvTPifwo4TMuP2URkcmiZkP64PuDRRQFeb4G2y7Q3t3GPLKkfkBTYfAiIsC9/O2P4QD7EscUUUoWKX3wNiVf+yXs8T/x4ZSfXTpI/OubdpEv+HzC3meCRjsGXUeuNzhf0rNFVcU+0WUmumXPgnwovbpRJdXyxo24SAMSR6khQPoamP8A4GwD7F9dKfPw/oAKKKmkRbEJfg3dD/Z8UbH8cWT9ddNLb4M3yEleIRbgA5iJ5Enz82P1oopxX0Tyf2O1+El+efEYh8oM/wDMKXj+Dkp/2nE5f6IlT89VFFRwj9DnL7HEfwQsjjvrm7l8wXUD/hyPrUlbfBvg684Hf+aWT/lIFFFWKk9wvsPw63cSQ2kKuv2W06iPUE5wfWrFRRQBRRRQBRRRQH//2Q==" : el = "data:image/png;base64,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");
    console.log(this.props.fruits);
    return arr[index];
  }

  render() {
    return (
      <div className="App">
        <img src={this.linksOfPhotos(0)} alt=""/>
        <img src={this.linksOfPhotos(1)} alt=""/>
        <img src={this.linksOfPhotos(2)} alt=""/>
        <img src={this.linksOfPhotos(3)} alt=""/>
        <img src={this.linksOfPhotos(4)} alt=""/>
      </div>
    );
  }
}

export default Fruits;
