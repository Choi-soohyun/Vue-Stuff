<template>
	<section class="stuff-list">
		<ul>
			<!-- <li>
				<div class="left">
					<header>바나나</header>
					<div class="sub">
						<span class="place">냉장고</span>
						<span class="buy-date">2021-03-20</span>
						<span class="limit-date">2021-04-01</span>
						<span class="leftover">4</span>
					</div>
				</div>
				<div class="right">
					<button class="eat">먹음</button>
					<button class="del">삭제</button>
				</div>
			</li> -->
			<li v-for="stuff in stuffs" :key="stuff.id">				
				<div class="left">
					<nuxt-link :to="'/stuff/'+stuff.id">
						<header>{{ stuff.title }}</header>
						<div class="sub">
							<span class="place">{{ stuff.place }}</span>
							<span class="buy-date">{{ stuff.buyDate }}</span>
							<span class="limit-date">{{ stuff.limitDate }}</span>
							<span class="leftover">{{ stuff.leftover }}</span>
						</div>
					</nuxt-link>
				</div>
				<div class="right">
					<template v-if="stuff.leftover > 0">
						<button class="eat" @click="onEat(stuff.id)">먹음</button>
					</template>
				</div>
			</li>			
		</ul>
	</section>
</template>

<script>
export default {
	props: {
		stuffs: {
			type: Array,
			required: true,
		},
		onEat: {
			type: Function,
			required: true,
		}
	},
}
</script>

<style scoped>
ul { }
ul li { display:flex; padding:0; font-size: 12px;; }

.left { flex-grow: 1; padding:8px 15px; border-top:1px solid #f2f2f2; }
.left header { font-family: 'Noto500'; }
.left .sub { color:#939393; } /*#aeaeae*/
.left .sub span { display: block; }

.left .place { }
.left .place::before { content: "위치: "; }
.left .buy-date { }
.left .buy-date::before { content:"구매일자: "; }
.left .limit-date { }
.left .limit-date::before { content:"유통기한: " }
.left .leftover { }
.left .leftover::before { content: "남은 개수: "; }

.right { display:flex; }
.right button { padding:0px 10px; color:#fff;font-family: 'Noto100';  border:0px; border-radius: 0; }
.right .eat { background-color: #f5cec7; }
.right .del { background-color: #e79796; }

.done { color:#aeaeae; background-color: #f2f2f2;}
.done .sub { color:#c5c5c5; }
.done .eat { background-color: #a2a2a2;}
.done .del { background-color: #4d4d4d;}
</style>